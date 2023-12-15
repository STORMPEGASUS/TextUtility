import React, { useState, useTransition } from "react";

export default function TextForm(props) {
  
  const [boldBtn,changeBtn]=useState("Change to Bold")

  //variable to hold the style object
  const [weight, setStyle] = useState({
    fontWeight: "normal",
    height: "150px",
    resize: "vertical",
  });
  //function for   changing the boldness of text
  const boldText = () => {
    if (weight.fontWeight === "normal")
    {
      setStyle({ fontWeight: "bold", height: "150px", resize: "vertical" });
      changeBtn("Change to Normal")
    }
      
    else if (weight.fontWeight === "bold"){
      setStyle({ fontWeight: "normal", height: "150px", resize: "vertical" });
      changeBtn("Change to Bold")
    }
      
  };

  //function declaration
  const upClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    // console.log("On Changed handled");
    setText(event.target.value);
  };
  //function for text reading
  const Speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const [text, setText] = useState(""); // use of state variable and updation function
  //text="Changed value";  //wrong way to update
  //   setText("Changed value"); //correct way to update
  return (
    <>
      <div className="container">
        <h1>{props.headings}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={weight}
            value={text}
            onChange={handleOnchange}
          />
          {text.length === 0 && (
            <label htmlFor="floatingTextarea2">Example testcase</label>
          )}
        </div>

        <button className="btn btn-primary my-3" onClick={upClick}>
          Convert to Upper case
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={lowClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={boldText}>
          {boldBtn}
        </button>
        <button onClick={Speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(" ").length - 1}</b> words and <b> {text.length} </b>
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes to read
        </p>
        <br />
        <h3>Preview</h3>
        <p style={weight}>{text}</p>
      </div>
    </>
  );
}
