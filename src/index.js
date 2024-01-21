import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit"
import { Toaster } from "react-hot-toast";


const store = configureStore({
  reducer:rootReducer,
});
=======
>>>>>>> 9c6c4a75186a7d109c1e47e9228696944b7571d1

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
  <Provider store = {store}>
    <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
  </Provider>
    
    
=======
    <App />
>>>>>>> 9c6c4a75186a7d109c1e47e9228696944b7571d1
  </React.StrictMode>
);
