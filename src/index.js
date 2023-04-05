import React from "react";
import App from "./app";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
// const header=<h1>This is My first React Application</h1>;
 // console.log(header);

// ReactDOM.render(header,document.getElementById('root'))

 const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App></App>
);

// let root=document.getElementById('root');
// root.append(App());

