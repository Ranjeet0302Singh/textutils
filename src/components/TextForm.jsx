import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter The Text Here");

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3 ">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <div className="btn btn-primary mx-4" onClick={handleUpClick}>
        Convert to UpperCase
      </div>
      <div className="btn btn-primary" onClick={handleLowClick}>
        Convert to LowerCase
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>Preview</p>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
