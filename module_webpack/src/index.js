import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// );


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>hello world</h1>
  </React.StrictMode>
);