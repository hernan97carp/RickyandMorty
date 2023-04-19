import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './components/stylesheet/form.css'
import  store from "./redux/store"
import {Provider} from "react-redux"

// ReactDOM.render(
//  <Provider store={store}>

//   <BrowserRouter>
//   <App />

//   </BrowserRouter>

//   </Provider>,
//   document.getElementById('root')
// )
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

  <Provider store={store}>

  <BrowserRouter>
  <App />

  </BrowserRouter>

  </Provider>,
);