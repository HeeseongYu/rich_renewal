// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/main.css'; // 테일윈드 먼저 로드
import './css/main_responsive.css';
import './css/common.css';
import './css/common_responsive.css';
import './css/webfont.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);