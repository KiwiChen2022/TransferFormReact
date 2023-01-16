import React from "react";

function FormUnit(props) {
  return (
    <div className="formUnit">
      <h2 className="label-wrapper">
        <label for={props.id}>{props.labelText}</label>
      </h2>
      <input id={props.id} type={props.type} />
    </div>
  );
}

export default FormUnit;
