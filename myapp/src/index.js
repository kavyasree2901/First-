import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Display(){
  return <h1>Form Is Successfully Submited....</h1>
}
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
function send(){
  root2.render(<Display/>);
}
function MyForm(){
  return (
    <center>
      <h1>Registration Form</h1>
    <form onSubmit={send}>
    <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br></br>
    <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" /><br></br>
      DOB<input type="date" name="" /><br></br>
      Gender<input type="radio" id="male" name="gender" value="male"/>
       <lable for="male">male</lable>
      <input type="radio" id="Female" name="gender" value="Female"/>
       <lable for="Female">Female</lable><br></br>
      Email<input type="email" name="" /><br></br>
      Password<input type="password" name="" /><br></br>
    </form>
    <input onClick={send} type="submit" name="" /> <br></br>
    </center>
  )
}
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <MyForm/>
);
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
