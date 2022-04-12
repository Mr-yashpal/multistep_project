import React, { useReducer, useEffect, useState } from 'react';
import {reducer} from "./reducers.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import SignUp from './App/SignUp';
import Message from './App/Message';
import CheckBox from './App/CheckBox';
import Submit from './App/Submit';
import NoPage from "./App/NoPage";
import './App.css';

const initialFormData = {
  fName: '',
  lName: '',
  dateOfBirth: "",
  email: '',
  address: '',
  bigMessage: '',
  mChoice1: 0,
  mChoice2: 1,
  male: 0,
  female: 1,
  bChoice1: 0,
  bChoice2: 0,
};

const wrongFormData = {
  wrongFName: '',
  wrongLName: '',
  wrongDateOfBirth: '',
  wrongEmail: '',
  wrongAddress: '',
};


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

// ReactDOM.render(<App />, document.getElementById("root"));

export {initialFormData, wrongFormData};