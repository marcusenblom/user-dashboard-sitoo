import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.scss";
import App from './App.tsx';

// FONTS
import "@fontsource/montserrat/index.css"; // 400
import "@fontsource/montserrat/300.css"; // Light
import "@fontsource/montserrat/500.css"; // Medium
import "@fontsource/montserrat/700.css"; // Bold
import "@fontsource/montserrat/900.css"; // Extra Bold


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)