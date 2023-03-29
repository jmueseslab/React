import React from 'react';
//import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';


const divRoot = createRoot(document.getElementById('root'));

divRoot.render(
    <React.StrictMode>
        <CounterApp value={ 20 }/>
    </React.StrictMode>,
);