import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UseState from "./useState";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1>React hooks</h1>
        <UseState/>
    </>
);

reportWebVitals();
