import React, {useState, setState} from "react";

const Button = (props) => {

    return (

        <button onClick={props.functionToRun}>Submit</button>
    )
}

export default Button;