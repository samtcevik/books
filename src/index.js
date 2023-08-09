import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BoookContext from './context/book';
import { Provider } from './context/book';

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);


root.render(
    <Provider>
        <App></App>
    </Provider>
)