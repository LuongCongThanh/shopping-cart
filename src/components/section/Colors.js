import React from "react";
// import '../css/Details.css';
const Colors = (props) => {
    console.log(props.color)
  return (
    <div className="colors">
      {props.color.map((color, index) => (
        <button key={index} style={{ background: color }}>
        </button>
      ))}
    </div>
  );
};

export default Colors;
