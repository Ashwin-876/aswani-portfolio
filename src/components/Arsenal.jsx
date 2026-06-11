import React from 'react';
import TextType from './TextType';
import './Arsenal.css';
import LogoLoop from './LogoLoop';

// A collection of clean, colored SVG icons for all tech stack items to ensure crisp rendering
const TechIcons = {
    python: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#3776AB" d="M12 2C6.48 2 6.17 2.45 6.17 4.14v2.09h5.96v.83H3.81C2.12 7.06 2 7.57 2 12c0 4.43.12 4.94 1.81 4.94h1.72v-2.42c0-1.8 1.48-3.28 3.28-3.28h5.96c1.8 0 3.28-1.48 3.28-3.28V5.86c0-1.8-1.48-3.28-3.28-3.28H12zm2.09 1.76c.46 0 .83.37.83.83 0 .46-.37.83-.83.83-.46 0-.83-.37-.83-.83 0-.46.37-.83.83-.83z"/>
            <path fill="#FFD343" d="M12 22c5.52 0 5.83-.45 5.83-2.14v-2.09h-5.96v-.83h8.32c1.69 0 1.81-.51 1.81-4.94 0-4.43-.12-4.94-1.81-4.94h-1.72v2.42c0 1.8-1.48 3.28-3.28 3.28H11.23c-1.8 0-3.28 1.48-3.28 3.28v2.12c0 1.8 1.48 3.28 3.28 3.28H12zm-2.09-1.76c-.46 0-.83-.37-.83-.83 0-.46.37-.83.83-.83s.83.37.83.83c0 .46-.37.83-.83.83z"/>
        </svg>
    ),
    tensorflow: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#FF6F00" d="M12 2.69l9.31 5.37v10.74L12 24.17l-9.31-5.37V8.06L12 2.69m0-.77L1.87 7.62v11.69L12 25l10.13-5.69V7.62L12 1.92z"/>
            <path fill="#FF6F00" d="M12 5.92l6.23 3.6v7.2L12 20.32l-6.23-3.6v-7.2L12 5.92m0-.77l-7 4.04v8.08l7 4.04 7-4.04V9.19l-7-4.04z"/>
            <path fill="#FF6F00" d="M12 9.15l3.15 1.82v3.65L12 16.44l-3.15-1.82v-3.65L12 9.15m0-.77l-3.92 2.26v4.52l3.92 2.26 3.92-2.26v-4.52L12 8.38z"/>
        </svg>
    ),
    pytorch: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#EE4C2C" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.69 13.91c-.26-.1-.5-.22-.72-.37-.22-.15-.42-.32-.59-.51-.17-.19-.3-.39-.4-.61s-.14-.43-.14-.65h-.06c-.02.26-.08.52-.18.76s-.25.46-.46.66c-.21.2-.46.36-.76.47s-.63.17-.99.17c-.52 0-.96-.1-1.32-.3s-.65-.47-.87-.8c-.22-.33-.37-.7-.44-1.12-.07-.42-.11-.84-.11-1.28V9.17h1.69v4.2c0 .28.01.55.03.82.02.27.07.51.15.72s.21.37.4.49c.19.12.45.18.79.18.32 0 .57-.05.77-.16s.35-.26.47-.46c.12-.2.19-.44.22-.71.03-.27.05-.56.05-.86V9.17h1.69v4.25c0 .3.02.58.05.86.03.28.1.53.22.74.12.21.28.37.49.49.21.12.47.18.8.18.33 0 .59-.06.77-.18.18-.12.32-.28.4-.49.08-.21.13-.45.15-.72.02-.27.03-.55.03-.84V9.17H19v4.28c0 .44-.04.86-.11 1.28-.07.42-.22.79-.44 1.12-.22.33-.51.6-.87.8-.36.2-.8.3-1.32.3-.57 0-1.09-.13-1.57-.42z"/>
        </svg>
    ),
    scikitlearn: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#F7931E" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-1.5-4.5c-.83 0-1.5-.67-1.5-1.5S10.67 9 11.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            <path fill="#0076B2" d="M8.5 14c0 .83-.67 1.5-1.5 1.5S5.5 14.83 5.5 14s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm8 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
        </svg>
    ),
    opencv: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <circle cx="12" cy="7" r="4.5" fill="none" stroke="#FF2E2E" strokeWidth="2.5"/>
            <circle cx="7.5" cy="15" r="4.5" fill="none" stroke="#00D200" strokeWidth="2.5"/>
            <circle cx="16.5" cy="15" r="4.5" fill="none" stroke="#2E2EFF" strokeWidth="2.5"/>
            <path d="M12 7.5a1.5 1.5 0 0 0 0-3" fill="#FF2E2E"/>
        </svg>
    ),
    pandas: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <rect x="3" y="10" width="4" height="11" rx="1.5" fill="#150458"/>
            <rect x="10" y="6" width="4" height="15" rx="1.5" fill="#E70488"/>
            <rect x="17" y="3" width="4" height="18" rx="1.5" fill="#FFC000"/>
        </svg>
    ),
    numpy: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#013243" d="M12 2.2L3.5 7.1v9.8L12 21.8l8.5-4.9V7.1L12 2.2zm0 1.7l6.8 3.9v7.8l-6.8 3.9-6.8-3.9V7.8L12 3.9z"/>
            <path fill="#4DABCF" d="M12 6.5l4.3 2.5v5l-4.3 2.5-4.3-2.5v-5L12 6.5z"/>
        </svg>
    ),
    matplotlib: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <circle cx="12" cy="12" r="9" fill="none" stroke="#11557c" strokeWidth="1.5"/>
            <path d="M12 3v18M3 12h18" stroke="#11557c" strokeWidth="1"/>
            <path d="M6 16c2-4 4-7 6-7s4 2 6 7" fill="none" stroke="#FF5722" strokeWidth="2.5"/>
        </svg>
    ),
    seaborn: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path d="M2 17c3.5-3 6.5-6 10-6s6.5 3 10 6" fill="none" stroke="#4C72B0" strokeWidth="3" strokeLinecap="round"/>
            <path d="M2 12C5.5 9 8.5 6 12 6s6.5 3 10 6" fill="none" stroke="#55A868" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M2 20c3.5-3 6.5-3 10-3s6.5 0 10 3" fill="none" stroke="#C44E52" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    ),
    powerbi: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <rect x="3" y="11" width="5" height="10" rx="1" fill="#F2C811"/>
            <rect x="9.5" y="7" width="5" height="14" rx="1" fill="#F2B807"/>
            <rect x="16" y="3" width="5" height="18" rx="1" fill="#E29400"/>
        </svg>
    ),
    cpp: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#00599C" d="M12 2L2 6.5v11L12 22l10-4.5v-11L12 2zm4 11h-2v2h-2v-2H8v-2h2v-2h2v2h2V9h2v4z"/>
        </svg>
    ),
    javascript: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
            <path fill="#000000" d="M18.8 18.2c-.4.7-1 .9-1.8.9-1.2 0-1.8-.7-1.8-2h1.6c0 .6.3.8.7.8.3 0 .5-.1.5-.4 0-.7-.9-.7-1.7-1.2-.8-.4-1.2-.9-1.2-1.8 0-1 .8-1.7 1.9-1.7 1 0 1.6.4 1.8 1.3h-1.6c-.1-.3-.3-.4-.5-.4-.3 0-.4.1-.4.4 0 .5.7.6 1.5 1 .8.4 1.3.9 1.3 1.9-.1.8-.4 1.4-.9 1.2zm-5.8-3.1v3.2c0 .9-.5 1.5-1.5 1.5-.9 0-1.4-.5-1.4-1.3h1.6c0 .3.2.4.4.4.3 0 .4-.2.4-.6v-3.2h1.5z"/>
        </svg>
    ),
    sql: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#00758F" d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 2c3.31 0 6 1.12 6 2.5S15.31 9 12 9s-6-1.12-6-2.5S8.69 4 12 4zm6 14c0 1.38-2.69 2.5-6 2.5s-6-1.12-6-2.5v-2.89c1.55.93 3.7 1.39 6 1.39s4.45-.46 6-1.39V18zm0-5c0 1.38-2.69 2.5-6 2.5s-6-1.12-6-2.5v-2.89c1.55.93 3.7 1.39 6 1.39s4.45-.46 6-1.39V13z"/>
        </svg>
    ),
    react: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <circle cx="12" cy="12" r="2" fill="#00D8FF"/>
            <path fill="none" stroke="#00D8FF" strokeWidth="1" d="M12 6.5c4.7 0 8.5 2.46 8.5 5.5s-3.8 5.5-8.5 5.5S3.5 15.04 3.5 12s3.8-5.5 8.5-5.5z" transform="rotate(30 12 12)"/>
            <path fill="none" stroke="#00D8FF" strokeWidth="1" d="M12 6.5c4.7 0 8.5 2.46 8.5 5.5s-3.8 5.5-8.5 5.5S3.5 15.04 3.5 12s3.8-5.5 8.5-5.5z" transform="rotate(90 12 12)"/>
            <path fill="none" stroke="#00D8FF" strokeWidth="1" d="M12 6.5c4.7 0 8.5 2.46 8.5 5.5s-3.8 5.5-8.5 5.5S3.5 15.04 3.5 12s3.8-5.5 8.5-5.5z" transform="rotate(150 12 12)"/>
        </svg>
    ),
    nextjs: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <circle cx="12" cy="12" r="11.5" fill="#000000" stroke="#FFFFFF" strokeWidth="1"/>
            <path fill="url(#nextjs-grad)" d="M16.5 18l-8.5-11h-1v10h1.5v-7.2l7.2 9.2h.8z"/>
            <rect x="15" y="7" width="1.5" height="5" fill="#FFFFFF"/>
            <defs>
                <linearGradient id="nextjs-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF"/>
                    <stop offset="100%" stopColor="#666666"/>
                </linearGradient>
            </defs>
        </svg>
    ),
    nodejs: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#339933" d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm5.7 13.6l-1.4.8V9.1l1.4-.8v7.3zm-3.5 2l-1.4.8V8.1l1.4-.8v10.3zm-4.4 2.5l-1.4.8V7.1l1.4-.8v14.4z"/>
        </svg>
    ),
    html5: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#E34F26" d="M2 3l1.8 17.2 8.2 2.3 8.2-2.3L22 3H2zm16 6h-7.6v2.5h7.3l-.6 6.3-5.7 1.6-5.7-1.6-.4-3.8H8.7l.2 2.2 3.1.8 3.1-.8.3-3.4H5.2L4.6 6h13.8l-.4 3z"/>
        </svg>
    ),
    css3: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#1572B6" d="M2 3l1.8 17.2 8.2 2.3 8.2-2.3L22 3H2zm16 6H7.4l.2 2.5h10.1l-.6 6.3-5.1 1.4-5.1-1.4-.3-3.3H9.2l.2 1.8 2.6.7 2.6-.7.3-3.1H5L4.4 6h14l-.4 3z"/>
        </svg>
    ),
    mongodb: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#47A248" d="M12 1.5C11.5 1.5 8 5.7 8 10.5c0 4.1 2.3 7.8 4 9.5v2.5c0 .3.2.5.5.5s.5-.2.5-.5v-2.5c1.7-1.7 4-5.4 4-9.5 0-4.8-3.5-9-4-9zM12 17c-.8 0-1.5-.7-1.5-1.5S11.2 14 12 14s1.5.7 1.5 1.5S12.8 17 12 17z"/>
        </svg>
    ),
    mysql: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#00758F" d="M12 2C8.5 2 3.5 4.5 3.5 10c0 4.1 3 7.1 6.5 8.2l-1.2 2.2c-.2.3 0 .7.4.7h5.6c.4 0 .7-.3.7-.7l-.4-2.2c3.5-1.1 6.5-4.1 6.5-8.2 0-5.5-5-8-8.5-8zM7.5 10c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5S7.5 11.9 7.5 10z"/>
        </svg>
    ),
    postgresql: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#336791" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.8c-.8-.2-1.5-.6-2-1.2-.5-.6-.8-1.4-.8-2.3h1.8c0 .5.1.9.4 1.2.3.3.7.5 1.2.5.6 0 1-.2 1.3-.5s.4-.8.4-1.4v-4.9h1.8v4.9c0 1.1-.3 1.9-.9 2.5-.6.6-1.5 1-2.6 1.1-.2 0-.5.1-.6.1z"/>
        </svg>
    ),
    firebase: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#FFCA28" d="M3.9 18.1l9.1-16c.2-.4.8-.4 1 0l2.1 3.9-12.2 12.1z"/>
            <path fill="#FFA000" d="M20.1 15.6l-4.4-8.4-3.5-6.6c-.3-.5-1.1-.5-1.3 0L3.9 18.1l.1.1 7.2-7.1 8.9 4.5z"/>
            <path fill="#F57C00" d="M3.9 18.2l8.2 4.6c.3.2.8.2 1.1 0l7.2-4.6-16.5 0z"/>
        </svg>
    ),
    aws: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#FF9900" d="M12 18.8c-3.1 0-5.7-1.1-7.2-2.9l1.1-1.2c1.2 1.5 3.3 2.3 5.9 2.3 3.8 0 6.2-1.9 6.2-4.7 0-2.4-1.7-3.9-5.1-4.7-3.5-.8-5.9-1.8-5.9-4.8 0-2.6 2.2-4.5 5.5-4.5 2.6 0 4.7.9 6 2.4l-1.1 1.2c-1-1.2-2.6-1.8-4.8-1.8-2.6 0-4.1 1.3-4.1 3 0 2.1 1.6 3.1 4.9 3.9 3.8.9 6.2 2.1 6.2 5.5.1 3.5-2.8 6.3-6.9 6.3z"/>
        </svg>
    ),
    docker: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#2496ED" d="M2 13.5h3v-2.2H2v2.2zm4.1 0h3v-2.2h-3v2.2zm4.1 0h3v-2.2h-3v2.2zm4.2 0h3v-2.2h-3v2.2zM2 17h18.2c1.5 0 2.8-1.1 2.8-2.5s-1.3-2.5-2.8-2.5H2c-1.5 0-2 1.1-2 2.5S.5 17 2 17z"/>
        </svg>
    ),
    git: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#F05032" d="M21.8 11.4L12.6 2.2c-.3-.3-.8-.3-1.1 0L9.3 4.4l3.1 3.1c.3-.1.6-.2.9-.2 1.1 0 2 .9 2 2s-.9 2-2 2c-.3 0-.6-.1-.9-.2v4.8c.3.1.6.2.9.2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.3.1-.6.2-.9l-3-3v3.8c.1.3.2.6.2.9 0 1.1-.9 2-2 2s-2-.9-2-2c0-.3.1-.6.2-.9l1.8-1.8V9.7L6.6 7.9c-.3-.3-.3-.8 0-1.1l2.2-2.2L2.2 11.4c-.3.3-.3.8 0 1.1l9.2 9.2c.3.3.8.3 1.1 0l9.2-9.2c.4-.3.4-.8.1-1.1z"/>
        </svg>
    ),
    github: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#FFFFFF" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
    ),
    linux: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#FFD133" d="M12 2c-4.4 0-6 3.5-6 6.5 0 2.2.8 4.2 2.1 5.3C7.5 15.6 7 17.5 7 19.5c0 1.4.6 2.5 1.8 2.5 1.5 0 2.2-.8 3.2-2 1 .5 2 .5 3 0 1 1.2 1.7 2 3.2 2 1.2 0 1.8-1.1 1.8-2.5 0-2-.5-3.9-1.1-5.7 1.3-1.1 2.1-3.1 2.1-5.3 0-3-1.6-6.5-6-6.5zm-3 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-3 5c-1.5 0-2-.8-2-.8h4s-.5.8-2 .8z"/>
        </svg>
    ),
    vscode: (
        <svg role="img" viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
        </svg>
    ),
    jupyter: (
        <svg role="img" viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F37626" d="M7.157 22.201A1.784 1.799 0 0 1 5.374 24a1.784 1.799 0 0 1-1.784-1.799 1.784 1.799 0 0 1 1.784-1.799 1.784 1.799 0 0 1 1.783 1.799zM20.582 1.427a1.415 1.427 0 0 1-1.415 1.428 1.415 1.427 0 0 1-1.416-1.428A1.415 1.427 0 0 1 19.167 0a1.415 1.427 0 0 1 1.415 1.427zM4.992 3.336A1.047 1.056 0 0 1 3.946 4.39a1.047 1.056 0 0 1-1.047-1.055A1.047 1.056 0 0 1 3.946 2.28a1.047 1.056 0 0 1 1.046 1.056zm7.336 1.517c3.769 0 7.06 1.38 8.768 3.424a9.363 9.363 0 0 0-3.393-4.547 9.238 9.238 0 0 0-5.377-1.728A9.238 9.238 0 0 0 6.95 3.73a9.363 9.363 0 0 0-3.394 4.547c1.713-2.04 5.004-3.424 8.772-3.424zm.001 13.295c-3.768 0-7.06-1.381-8.768-3.425a9.363 9.363 0 0 0 3.394 4.547A9.238 9.238 0 0 0 12.33 21a9.238 9.238 0 0 0 5.377-1.729 9.363 9.363 0 0 0 3.393-4.547c-1.712 2.044-5.003 3.425-8.772 3.425Z"/>
        </svg>
    ),
    postman: (
        <svg role="img" viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF6C37" d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
        </svg>
    ),
    figma: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#F24E1E" d="M8 2c2.2 0 4 1.8 4 4v2H8C5.8 8 4 6.2 4 4s1.8-4 4-4zm0 6h4v4H8c-2.2 0-4-1.8-4-4s1.8-4 4-4zm4 4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4h4z"/>
            <path fill="#A259FF" d="M12 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4h-4V8z"/>
            <path fill="#1ABC9C" d="M16 12c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4v-4h4z"/>
        </svg>
    ),
    canva: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#00C4CC" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
        </svg>
    ),
    notion: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#FFFFFF" d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm2.5 3v14h3.5v-5.5l4.5 5.5h3.5V5h-3.5v5.5L10 5H6.5z"/>
        </svg>
    ),
    slack: (
        <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#E01E5A" d="M5.04 15.12a2.52 2.52 0 1 1-2.52-2.52h2.52v2.52zm1.26 0a2.52 2.52 0 0 1 5.04 0v5.04a2.52 2.52 0 1 1-5.04 0v-5.04z"/>
            <path fill="#36C5F0" d="M8.88 5.04a2.52 2.52 0 1 1 2.52-2.52v2.52H8.88zm0 1.26a2.52 2.52 0 0 1 0 5.04H3.84a2.52 2.52 0 1 1 0-5.04h5.04z"/>
            <path fill="#2EB67D" d="M18.96 8.88a2.52 2.52 0 1 1 2.52 2.52h-2.52V8.88zm-1.26 0a2.52 2.52 0 0 1-5.04 0V3.84a2.52 2.52 0 1 1 5.04 0v5.04z"/>
            <path fill="#ECB22E" d="M15.12 18.96a2.52 2.52 0 1 1-2.52 2.52v-2.52h2.52zm0-1.26a2.52 2.52 0 0 1 0-5.04h5.04a2.52 2.52 0 1 1 0 5.04h-5.04z"/>
        </svg>
    )
};

const allLogos = Object.entries(TechIcons).map(([key, icon]) => ({
    node: (
        <div 
            className="tech-marquee-item gold-border" 
            style={{ 
                background: 'rgba(204, 164, 59, 0.05)', 
                borderRadius: '16px', 
                width: '64px', 
                height: '64px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                border: '1px solid rgba(204, 164, 59, 0.2)'
            }}
        >
            <div style={{ transform: 'scale(1.2)' }}>
                {icon}
            </div>
        </div>
    ),
    ariaLabel: key
}));

const Arsenal = () => {
    const techGroups = [
        {
            title: "AI & MACHINE LEARNING",
            icon: "🧠",
            items: [
                { name: "Python", icon: TechIcons.python },
                { name: "TensorFlow", icon: TechIcons.tensorflow },
                { name: "PyTorch", icon: TechIcons.pytorch },
                { name: "Scikit-learn", icon: TechIcons.scikitlearn },
                { name: "OpenCV", icon: TechIcons.opencv }
            ]
        },
        {
            title: "DATA SCIENCE",
            icon: "📊",
            items: [
                { name: "Pandas", icon: TechIcons.pandas },
                { name: "NumPy", icon: TechIcons.numpy },
                { name: "Matplotlib", icon: TechIcons.matplotlib },
                { name: "Seaborn", icon: TechIcons.seaborn },
                { name: "Power BI", icon: TechIcons.powerbi }
            ]
        },
        {
            title: "PROGRAMMING LANGUAGES",
            icon: "💻",
            items: [
                { name: "Python", icon: TechIcons.python },
                { name: "C++", icon: TechIcons.cpp },
                { name: "JavaScript", icon: TechIcons.javascript },
                { name: "SQL", icon: TechIcons.sql }
            ]
        },
        {
            title: "WEB DEVELOPMENT",
            icon: "🌐",
            items: [
                { name: "React", icon: TechIcons.react },
                { name: "Next.js", icon: TechIcons.nextjs },
                { name: "Node.js", icon: TechIcons.nodejs },
                { name: "HTML5", icon: TechIcons.html5 },
                { name: "CSS3", icon: TechIcons.css3 }
            ]
        },
        {
            title: "DATABASES",
            icon: "🗄️",
            items: [
                { name: "MongoDB", icon: TechIcons.mongodb },
                { name: "MySQL", icon: TechIcons.mysql },
                { name: "PostgreSQL", icon: TechIcons.postgresql },
                { name: "Firebase", icon: TechIcons.firebase }
            ]
        },
        {
            title: "CLOUD & DEVOPS",
            icon: "☁️",
            items: [
                { name: "AWS", icon: TechIcons.aws },
                { name: "Docker", icon: TechIcons.docker },
                { name: "Git", icon: TechIcons.git },
                { name: "GitHub", icon: TechIcons.github },
                { name: "Linux", icon: TechIcons.linux }
            ]
        },
        {
            title: "TOOLS & OTHERS",
            icon: "⚙️",
            isDoubleWidth: true,
            items: [
                { name: "VS Code", icon: TechIcons.vscode },
                { name: "Jupyter", icon: TechIcons.jupyter },
                { name: "Postman", icon: TechIcons.postman },
                { name: "Figma", icon: TechIcons.figma },
                { name: "Canva", icon: TechIcons.canva },
                { name: "Notion", icon: TechIcons.notion },
                { name: "Slack", icon: TechIcons.slack }
            ]
        }
    ];



    const notations = [
      "[person: 96%]",
      "[car: 93%]",
      "[traffic_light: 90%]",
      "[truck: 87%]",
      "[bench: 84%]",
      "[backpack: 81%]",
      "[umbrella: 78%]"
    ];

    return (
        <section id="arsenal" className="section tech-stack-section">
            {/* Looping Tech Stack Ticker (Full Width) */}
            <div style={{ marginBottom: '80px', paddingTop: '20px', width: '100%', overflow: 'hidden' }}>
                <LogoLoop
                    logos={allLogos}
                    speed={50}
                    direction="left"
                    fadeOut={true}
                    fadeOutColor="#06070a"
                    gap={40}
                    scaleOnHover={true}
                />
            </div>

            <div className="container">
                {/* Chess board overlay grid lines for aesthetic background depth */}
                <div className="chess-board-grid-local"></div>

                {/* Left & Right floating notation markers for chess match ambiance */}
                {notations.map((note, idx) => (
                    <span 
                        key={idx} 
                        className="chess-drift-notation font-mono" 
                        style={{
                            top: `${15 + (idx * 12)}%`,
                            left: idx % 2 === 0 ? `${2 + (idx * 2.5)}%` : 'auto',
                            right: idx % 2 !== 0 ? `${2 + (idx * 2)}%` : 'auto',
                            animationDelay: `${idx * 2}s`
                        }}
                    >
                        {note}
                    </span>
                ))}

                {/* Centered Section Header */}
                <div className="tech-header-centered">
                    <div className="tech-header-info">
                        <div className="stack-badge-container">
                            <div className="badge-line"></div>
                            <div className="stack-badge-inner">
                                <svg viewBox="0 0 24 24" width="16" height="16" className="stack-isometric-icon">
                                    <path fill="var(--accent-gold)" d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" stroke="var(--accent-gold)" strokeWidth="1.5" fillOpacity="0.1"/>
                                </svg>
                                <span className="stack-badge-title">STACK</span>
                            </div>
                            <div className="badge-line"></div>
                        </div>

                        <h2 className="tech-section-title" style={{ minHeight: '80px', display: 'block' }}>
                            <TextType 
                                text={["MY TECH STACK", "AI FRAMEWORKS & LOGIC", "DATA SCIENCE TOOLKITS"]} 
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
                        <p className="tech-section-subtitle">
                            The tools and technologies I use to build intelligent, scalable and efficient solutions.
                        </p>

                        <div className="decor-divider">
                            <span className="decor-line"></span>
                            <span className="pawn-icon">♟</span>
                            <span className="decor-line"></span>
                        </div>


                    </div>
                </div>

                {/* Interactive Categories Grid */}
                <div className="arsenal-grid-modern">
                    {techGroups.map((group, index) => (
                        <div 
                            key={index} 
                            className={`arsenal-category-card gold-border ${group.isDoubleWidth ? 'col-span-2' : ''}`}
                        >
                            <div className="category-header">
                                <span className="category-decor-icon">{group.icon}</span>
                                <h3 className="category-title">{group.title}</h3>
                            </div>
                            <div className="category-items-grid">
                                {group.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="tech-logo-item">
                                        <div className="logo-wrapper">
                                            {item.icon}
                                        </div>
                                        <span className="logo-name">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Quote testimonial card with subtle Chess Knight watermark */}
                    <div className="arsenal-category-card quote-card-modern gold-border">
                        <div className="knight-watermark">
                            <svg viewBox="0 0 448 512" width="120" height="120">
                                <path 
                                    fill="rgba(204, 164, 59, 0.03)" 
                                    stroke="rgba(204, 164, 59, 0.05)" 
                                    strokeWidth="0.5"
                                    d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0c0-20 9.9-38.7 26.4-50L250.7 232.8c-10.6-7.2-10.9-22.6-.7-30.3c6.6-5 15.7-5 22.3 0l49.4 37c2.3 1.7 4.7 3.2 7.3 4.5l3.2 1.6c15.4 7.7 33.8 6.6 48.1-3l10.6-7c8.9-5.9 14.2-15.9 14.2-26.6V106.5c0-17-6.7-33.2-18.7-45.2L352 48l-256 0zM352 0l16 16c21.9 21.9 32 51.2 32 80.5l0 35.9c3.9 1.1 7.7 2.8 11.2 5.1l10.6 7c28.6 19.1 46.2 51.2 46.2 85.5v16c0 14.3-5.7 28.1-15.8 38.2l-12.2 12.2c16 22 24.8 48.4 24.8 75.8V416H480v48c0 26.5-21.5 48-48 48H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V416 400c0-27.4 8.8-53.8 24.8-75.8l-12.2-12.2C18.5 301.9 12.8 288.1 12.8 273.8v-16c0-34.3 17.6-66.4 46.2-85.5l10.6-7c3.5-2.3 7.3-4 11.2-5.1V96.5c0-29.3 10.1-58.6 32-80.5L128 0 352 0z"
                                />
                            </svg>
                        </div>
                        <div className="quote-content-wrapper">
                            <span className="quote-mark">“</span>
                            <blockquote className="quote-text">
                                The right tools in the right hands can solve the most complex problems.
                            </blockquote>
                            <cite className="quote-author">— ASWANI C</cite>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arsenal;
