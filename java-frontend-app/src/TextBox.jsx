import React,  { Component } from "react";

const TextBox = (props) => {
    return (
        <input type="text" onChange={ e => props.functionToRun(e.target.value)}></input>
    )
}

export default TextBox;