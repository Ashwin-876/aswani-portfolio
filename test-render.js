import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';

try {
  const html = renderToString(React.createElement(App));
  console.log("App rendered successfully on server side!");
} catch (e) {
  console.error("App render failed:", e);
}
