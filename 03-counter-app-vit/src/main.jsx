import React from 'react';
//import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';

function App(){
    //document.createElement...
    return (<h1>Hola mundo</h1>);
}

const divRoot = createRoot(document.getElementById('root'));

divRoot.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);