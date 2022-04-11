import React, { useReducer, useEffect, useState } from 'react';
import {reducer} from "./reducers.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import SignUp from './App/SignUp';
import Message from './App/Message';
import CheckBox from './App/CheckBox';
import Submit from './App/Submit';
import NoPage from "./App/NoPage";
import {initialFormData} from './App.js'
import './App.css';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialFormData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp signUp={state} dispatch={dispatch} reducer={reducer}/>} />
        <Route path="message" element={<Message message={state} dispatch={dispatch} reducer={reducer}/>} />
        <Route path="checkBox" element={<CheckBox checkBox={state} dispatch={dispatch} reducer={reducer}/>} />
        <Route path="submit" element={<Submit  FormData={state}/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));