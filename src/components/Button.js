import React from "react";
import success from "../success.png";

function Button(props) {
  function closeWindow() {}
  const invisible = (
    <div className="invisible">
      <img src={success} className="Success-Send" alt="Successfully Send" />
      <button onClick="closeWindow()">Close</button>
    </div>
  );
  function handleSubmit(e) {
    e.preventDefault();
    invisible.style.display = "block";
    console.log("submit");
  }

  return (
    <div className="buttonWrapper">
      <button
        type="submit"
        className="btn btn__primary btn__lg"
        onClick={handleSubmit}
      >
        SEND TOKENS
      </button>
      {invisible}
    </div>
  );
}

export default Button;
