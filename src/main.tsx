import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { startFaviconAnimation } from './faviconAnimation';
import './index.css';

startFaviconAnimation();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
