import React from "react";
import '../styles/Button.css'

const ClearButton = (props) => (
  <button className='button-container'
  onClick={props.clearManage}>
    {props.children}
  </button>
);

export default ClearButton;