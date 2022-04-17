import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';

let react = 'React!'
let classCSS = 'bs'

const hello = <h1 class={classCSS}>Hello, {react}</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    hello,
);

const hello2 = <p class={classCSS}>Hello again, {react}</p>
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(

    hello2,
);

let counter = 0;

function show() {
    counter++;
    const el = <p class={classCSS}>{counter}</p>
    const root3 = ReactDOM.createRoot(document.getElementById('root3'));
    root3.render(
        el
    );
}

setInterval(show, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
