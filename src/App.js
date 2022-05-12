import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("DarkMode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled", "success");
      document.title = 'TextUtils - LightMode';

    }
  }

  const showAlert = (message , type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  return (
    <>
    <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-5">
<Switch>
          <Route exact path="/about">
          <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below.." mode={mode}/>
          </Route>
</Switch>
</div>
</Router>
    </>
  );
}

export default App;
