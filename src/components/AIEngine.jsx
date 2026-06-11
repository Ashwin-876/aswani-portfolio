import React, { useState, useEffect, useRef } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { RotateCcw, Cpu, TrendingUp } from 'lucide-react';
import TextType from './TextType';
import './AIEngine.css';

const AIEngine = () => {
    const [game, setGame] = useState(new Chess());
    const [gameHistory, setGameHistory] = useState([]);
    const [statusText, setStatusText] = useState("Initializing Engine Matrix...");
    const [evalScore, setEvalScore] = useState(0.0);
    const [searchDepth, setSearchDepth] = useState(0);
    const [isAiThinking, setIsAiThinking] = useState(true);
    const [lastMove, setLastMove] = useState(null);
    
    const engineRef = useRef(null);
    const timerRef = useRef(null);
    const gameRef = useRef(game);
    const [isEngineReady, setIsEngineReady] = useState(false);

    // Sync gameRef with game state
    useEffect(() => {
        gameRef.current = game;
    }, [game]);

    // Initialize Stockfish Web Worker
    useEffect(() => {
        // Load the stockfish.js file we placed in /public
        const worker = new Worker('/stockfish.js');
        engineRef.current = worker;

        worker.postMessage('uci');

        worker.onmessage = (event) => {
            const line = typeof event.data === 'string' ? event.data : event.data?.data || '';
            console.log("STOCKFISH:", line);

            // Parse engine evaluation and depth
            if (line.includes('info depth') && line.includes('score cp')) {
                const depthMatch = line.match(/depth (\d+)/);
                const scoreMatch = line.match(/score cp (-?\d+)/);
                
                if (depthMatch) setSearchDepth(parseInt(depthMatch[1], 10));
                
                if (scoreMatch) {
                    let cp = parseInt(scoreMatch[1], 10);
                    const turn = gameRef.current.turn();
                    if (turn === 'b') {
                        cp = -cp;
                    }
                    setEvalScore(cp / 100.0);
                }
            } else if (line.includes('info depth') && line.includes('score mate')) {
                const mateMatch = line.match(/score mate (-?\d+)/);
                if (mateMatch) {
                    const mateIn = parseInt(mateMatch[1], 10);
                    setEvalScore(mateIn > 0 ? 10.0 : -10.0);
                }
            }

            // Parse best move command
            if (line.startsWith('bestmove')) {
                const parts = line.split(' ');
                const moveString = parts[1]; // e.g., 'e2e4'
                
                if (moveString && moveString !== '(none)') {
                    executeMove(moveString);
                } else {
                    setStatusText("Stockfish returned no move.");
                }
            } else if (line === 'uciok') {
                worker.postMessage('isready');
            } else if (line === 'readyok') {
                setStatusText("Stockfish Ready.");
                setIsEngineReady(true);
            }
        };

        worker.onerror = (error) => {
            console.error("Worker Error:", error);
            setStatusText("Error loading Stockfish worker.");
        };

        return () => {
            worker.terminate();
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    // Watch for game state changes to trigger the next move
    useEffect(() => {
        if (engineRef.current && isEngineReady && !game.isGameOver()) {
            // Add a small artificial delay so the UI shows the previous move before instantly calculating the next
            timerRef.current = setTimeout(triggerEngine, 200);
        }
    }, [game.fen(), isEngineReady]);

    const triggerEngine = () => {
        const currentGame = gameRef.current;

        if (currentGame.isGameOver()) {
            setIsAiThinking(false);
            if (currentGame.isCheckmate()) {
                setStatusText(`CHECKMATE. ${currentGame.turn() === 'w' ? 'Black' : 'White'} wins! Restarting...`);
            } else if (currentGame.isDraw()) {
                setStatusText("DRAW. Restarting...");
            } else {
                setStatusText("GAME OVER. Restarting...");
            }
            // Auto restart after 5 seconds
            timerRef.current = setTimeout(resetGame, 5000);
            return;
        }

        setIsAiThinking(true);
        const currentTurn = currentGame.turn() === 'w' ? 'White' : 'Black';
        setStatusText(`${currentTurn} AI analyzing paths...`);

        // Send current position to Stockfish
        engineRef.current.postMessage(`position fen ${currentGame.fen()}`);
        
        // Ask Stockfish to search for 1 second (1000ms)
        engineRef.current.postMessage('go movetime 1000');
    };

    const executeMove = (moveString) => {
        const nextGame = new Chess(gameRef.current.fen());
        
        // Parse UCI move string (e.g., 'e2e4' or 'e7e8q')
        const from = moveString.substring(0, 2);
        const to = moveString.substring(2, 4);
        const promotion = moveString.length > 4 ? moveString[4] : undefined;

        try {
            nextGame.move({ from, to, promotion });
            
            setGame(nextGame);
            setGameHistory(nextGame.history());
            setLastMove({ from, to });
            setIsAiThinking(false);

            if (nextGame.isCheckmate()) {
                setStatusText(`CHECKMATE!`);
            } else if (nextGame.isCheck()) {
                setStatusText(`Check!`);
            }
        } catch (err) {
            console.error("Stockfish returned invalid move:", moveString);
        }
    };

    const resetGame = () => {
        const freshGame = new Chess();
        setGame(freshGame);
        setGameHistory([]);
        setEvalScore(0.0);
        setSearchDepth(0);
        setLastMove(null);
        setStatusText("Engine Matrix initialized.");
        setIsAiThinking(true);
        
        if (engineRef.current) {
            engineRef.current.postMessage('ucinewgame');
        }
        
        // Let React state update before triggering
        timerRef.current = setTimeout(triggerEngine, 500);
    };

    // Calculate percentage for evaluation meter (evalScore values usually range between -10 to +10)
    const getMeterPercentage = () => {
        // Clamp between -10 and +10
        const clamped = Math.min(10, Math.max(-10, evalScore));
        return ((clamped + 10) / 20) * 100;
    };

    return (
        <section id="ai-engine" className="section">
            <div className="container">
                <div className="notation-badge">
                    <span className="badge-move">CHAPTER VI</span>
                    <span className="badge-code">AI ENGINE</span>
                </div>
                <h2 className="section-title" style={{ minHeight: '80px', display: 'block' }}>
                    <TextType 
                        text={["THE| AI ENGINE", "DECISION| MATRIX", "STOCKFISH| AUTOPLAY"]} 
                        as="span"
                        typingSpeed={60}
                        deletingSpeed={35}
                        pauseDuration={2500}
                        loop={true}
                        showCursor={true}
                        cursorCharacter="|"
                        textColors={["#f3f4f6", "var(--accent-gold)"]}
                    />
                </h2>
                <p className="section-subtitle">Stockfish 10 WebAssembly • Autonomous AI vs AI Demonstration</p>

                <div className="engine-arena gold-border">
                    {/* Left: Interactive Chessboard */}
                    <div className="board-wrapper">
                        <div className="board-container">
                            <Chessboard 
                                id="EngineMatrixBoard"
                                position={game.fen()} 
                                arePiecesDraggable={false}
                                boardWidth={420}
                                customDarkSquareStyle={{ backgroundColor: '#181512' }}
                                customLightSquareStyle={{ backgroundColor: '#2f271d' }}
                                customBoardStyle={{
                                    borderRadius: '4px',
                                    border: '2px solid var(--accent-gold)',
                                    boxShadow: '0 5px 30px rgba(0,0,0,0.8)'
                                }}
                                customSquareStyles={
                                    lastMove
                                        ? {
                                              [lastMove.from]: { backgroundColor: 'rgba(204, 164, 59, 0.4)' },
                                              [lastMove.to]: { 
                                                  backgroundColor: 'rgba(204, 164, 59, 0.6)',
                                                  boxShadow: 'inset 0 0 10px rgba(204, 164, 59, 0.8)' 
                                              }
                                          }
                                        : {}
                                }
                            />
                        </div>
                    </div>

                    {/* Middle: Evaluation Meter */}
                    <div className="eval-meter-container">
                        <div className="eval-bar">
                            <div 
                                className="eval-fill-black" 
                                style={{ height: `${getMeterPercentage()}%` }}
                            ></div>
                        </div>
                        <div className="eval-label font-mono">
                            <TrendingUp size={14} />
                            <span>{evalScore > 0 ? `+${evalScore.toFixed(1)}` : evalScore.toFixed(1)}</span>
                        </div>
                    </div>

                    {/* Right: Controller & Engine Stats */}
                    <div className="engine-controls">
                        <div className="controls-header">
                            <Cpu className={`cpu-icon ${isAiThinking ? 'thinking' : ''}`} size={22} />
                            <div>
                                <h3 className="controls-title font-heading">ENGINE MATRIX</h3>
                                <span className="status-label font-mono">{statusText}</span>
                            </div>
                        </div>

                        {/* Extra Engine Stats row */}
                        <div className="engine-stats font-mono" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', marginBottom: '-0.5rem', opacity: 0.8, fontSize: '0.8rem' }}>
                            <div>DEPTH: {searchDepth}</div>
                            <div>NODE: LOCAL WASM</div>
                        </div>

                        <div className="log-panel">
                            <h4 className="log-title font-mono">MOVE NOTATION LOG</h4>
                            <div className="log-scroll font-mono">
                                {gameHistory.length === 0 ? (
                                    <span className="empty-log">No moves cataloged yet.</span>
                                ) : (
                                    <div className="moves-list">
                                        {gameHistory.reduce((acc, move, index) => {
                                            if (index % 2 === 0) {
                                                acc.push(`${Math.floor(index/2) + 1}. ${move}`);
                                            } else {
                                                acc[acc.length - 1] += ` ${move}`;
                                            }
                                            return acc;
                                        }, []).map((turn, idx) => (
                                            <div key={idx} className="turn-row">
                                                {turn}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button onClick={resetGame} className="btn btn-outline reset-btn font-mono">
                            <RotateCcw size={16} /> RESTART MATCH
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIEngine;
