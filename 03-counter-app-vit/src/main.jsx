import React from 'react';
//import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';


const divRoot = createRoot(document.getElementById('root'));

divRoot.render(
    <React.StrictMode>
        <FirstApp title="Hola soy Goku" subTitle="123"/>
    </React.StrictMode>,
);