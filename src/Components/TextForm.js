import React, { useState} from "react";

export default function TextForm(props) {


  //function declaration
  const upClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
  };

  const lowClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!","success");
  };
  //to make first letter capital
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Text is Capitalized!","success");
};

const copyText = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Text is Copied!","success");
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
      <div className="container" style={{color:props.theme==='light'?'black':'white'}}>
        <h1 style={{color:props.theme==='light'?'black':'white'}}>{props.headings}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{backgroundColor: props.theme==='light'?'white':'#2b3035',color:props.theme==='light'?'black':'white',height:'150px'}}
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
        <button className="btn btn-success my-2 mx-2" onClick={lowClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-danger my-2 mx-2" onClick={handleCapitalize}>
          Capitalize text
        </button>
        <button className="btn btn-info my-2 mx-2" onClick={copyText}>
          Copy text
        </button>
        {/* <button className="btn btn-danger my-2 mx-2" onClick={boldText}>
          {boldBtn}
        </button> */}
        <button onClick={Speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
      </div>
      <div className="container my-3" style={{color:props.theme==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(" ").length - 1}</b> words and <b> {text.length} </b>
          characters
        </p>
        <p>
          <b>{(0.008 * text.split(" ").length).toFixed(3)}</b> Minutes to read
        </p>
        <br />
        <h3>Preview</h3>
        <p >{text.length>0?text:"Enter you text in above box to preview"}</p>
      </div>
    </>
  );
}

