import React, { useState } from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const[mode , setMode] = useState('light')
  const[alert , setalert] = useState(null)

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
     })
     setTimeout(() => {
      setalert(null);
     }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1f1f1f';
      showAlert('Dark Mode Enabled', 'success')
      document.title = "TextUtils - dark";
      // setInterval(() => {
      //   document.title = "TextUtils is Lorem ipsum dolor sit amet."
      // }, 2000);
      // setInterval(() => {
      //   document.title = "sum dolor sit amet.TextUtils is Lorem ip"
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success')
      document.title = "TextUtils - light"
    }
  }
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title = 'TextUtils' About ='about textutils'/> */}
      {/* <Navbar/> */}
      <Navbar title = "Textutils" About='About Us' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Enter text to analyze" mode={mode} />}>
          </Route>
        </Routes> */}
        <TextForm showAlert={showAlert} heading = "Enter text to analyze" mode={mode} />
      </div>
      {/* </Router>    */}
    </>
  );
}

export default App;