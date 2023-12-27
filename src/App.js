import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, changeTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      changeTheme("dark");
      document.body.style.backgroundColor = "#09244b";
      showAlert("Dark Mode has been enabled!", "success");
    } else {
      changeTheme("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" theme={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          
          
        {/* <TextForm showAlert={showAlert} headings="Enter the text to analyze below" theme={mode} /> */}
          
          <Routes>

            {/* /user--> component 1
               /user/about---> component 2 */}
            <Route exact path="/about" element={<About  theme={mode}/>}  />
            <Route exact path="/" element={<TextForm showAlert={showAlert} headings="Enter the text to analyze below" theme={mode} />} />
           </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
