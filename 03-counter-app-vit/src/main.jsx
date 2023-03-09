import React from 'react';
//import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';


const divRoot = createRoot(document.getElementById('root'));

divRoot.render(
    <React.StrictMode>
        <HelloWorldApp />
    </React.StrictMode>,
);