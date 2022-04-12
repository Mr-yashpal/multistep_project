import React, { useReducer } from 'react';
import {reducerWrong} from "../reducers"
import img1 from '../images/img1.png'
import TopLayout from "./TopLayout";
import BottomLayout from "./BottomLayout";
import {wrongFormData} from '../App'

import 'react-calendar/dist/Calendar.css';

function SignUp({ signUp, dispatch }) {
  const [wrongState, dispatchWrong] = useReducer(reducerWrong, wrongFormData);
  function onChange(e) {
    const action = {
      type: e.target.name,
      value: e.target.value,
    }
    dispatch(action);
  }
  let validate = (e) => {
    console.log(e.target.value);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (e.target.name === "email") {
      if (reg.test(e.target.value) === false) {
        console.log(e.target.value, " is Not Correct , ", e.target.className);
        const wrongAction = {
          type: e.target.name,
          value: "wrong",
        }
        dispatchWrong(wrongAction);
        onChange(e);
        return false;
      }
      else {
        const wrongAction = {
          type: e.target.name,
          value: "",
        }
        dispatchWrong(wrongAction);
        onChange(e);
        console.log("Email is Correct");
      }
    }
    else {
      if (e.target.value === "") {
        console.log(e.target.value, " is Not Correct , ", e.target.className);
        const wrongAction = {
          type: e.target.name,
          value: "wrong",
        }
        dispatchWrong(wrongAction);
        onChange(e);
        return false;
      }
      else {
        const wrongAction = {
          type: e.target.name,
          value: "",
        }
        dispatchWrong(wrongAction);
        onChange(e);
        console.log("Email is Correct");
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submited");
  }

  return (
    <section className="sectionClass">
      <img src={img1} alt="Sign Up image"></img>
      <main>
        <TopLayout page={1} />
        <form onSubmit={handleSubmit}>
          <label className='form-label'>
            <div className='form-inner-style'>
              <small className={`${wrongState.wrongFName}-text`}>First Name</small>
              <input className={`form-input ${wrongState.wrongFName}`} type="text" onChange={(e) => validate(e)} name="fName" value={signUp.fName} />
              <p className={`error ${wrongState.wrongFName}-text`}>First Name Can't be empty.</p>
            </div>
            <div className='form-inner-style'>
              <small className={`${wrongState.wrongLName}-text`}>Last Name</small>
              <input className={`form-input ${wrongState.wrongLName}`} type="text" onChange={(e) => validate(e)} name="lName" value={signUp.lName} />
              <p className={`error ${wrongState.wrongLName}-text`}>Last Name Can't be empty.</p>
            </div>
            <div className='form-inner-style'>
              <small className={`${wrongState.wrongDateOfBirth}-text`}>Date of Birth</small>
              <input className={`form-input ${wrongState.wrongDateOfBirth} calender`} type="date" onChange={(e) => validate(e)} name="dateOfBirth" value={signUp.dateOfBirth} min="1922-01-01" max="2018-12-31" />
              <p className={`error ${wrongState.wrongDateOfBirth}-text`}>Date of Birth Can't be empty.</p>
              {/* <Calendar onChange={onChange} value={value} /> */}
            </div>
            <div className='form-inner-style'>
              <small className={`${wrongState.wrongEmail}-text`}>Email Address</small>
              {/* <input className={`form-input ${wrongState.wrongEmail}`} type="email" onChange={onChange} name="email" value={signUp.email} /> */}
              <input className={`form-input ${wrongState.wrongEmail}`} type="email" onChange={(e) => validate(e)} name="email" value={signUp.email} />
              <p className={`error ${wrongState.wrongEmail}-text`}>Invalid email</p>
              {/* usestate use karkai functionality add kardo */}

            </div>
            <div className='form-inner-style form-address-div'>
              <small className={`${wrongState.wrongAddress}-text`}>Address</small>
              <input className={`form-input ${wrongState.wrongAddress} form-address`} type="Address" onChange={(e) => validate(e)} name="address" value={signUp.address} />
              <p className={`error ${wrongState.wrongAddress}-text`}>Address Can't be empty.</p>

            </div>
          </label>
          {/* <section>
            <hr></hr>
            <br />
            <div className="buttonDiv">
              <Link to="/message" ><button type="submit" className="next-button">Next Step</button></Link>
            </div>
          </section> */}
        </form>
        <BottomLayout page={["", (wrongState.wrongEmail =="" && signUp.fName != "" && signUp.lName != "" &&  signUp.dateOfBirth != "" && signUp.email != "" && signUp.address != "")?"/message":"/"]} />
        {/* {( wrongFormData == wrongState)?<BottomLayout page={["", "/message"]} /> : <BottomLayout page={["", "/"]}} */}

      </main>
    </section>
  );
}
export default SignUp;