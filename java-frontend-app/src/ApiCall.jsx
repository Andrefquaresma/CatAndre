import { useState } from "react";
import React from "react";
import TextBox from "./TextBox";
import Button from "./Button";

const ApiCall = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);

    const loadApi = () => {
        const url = "http://localhost:8080/customer"
        
        fetch(url, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'firstName': firstName,
                'lastName': lastName,
                'phoneNumber': phoneNumber,
                'email':email
            })
        })
        .then(response => response.json())
        .then(response => {
            alert(firstName)
            setFirstName(response)
        })
    }

    return (
        <div>
            <div>
                <p>First Name</p>
                <TextBox id='FirstName' functionToRun = {setFirstName}></TextBox>
            </div>
            <div>
                <p>Last Name</p>
                <TextBox id='LastName' functionToRun = {setLastName}></TextBox>
            </div>
            <div>
                <p>Phone Number</p>
                <TextBox id='PhoneNumber' functionToRun = {setPhoneNumber}></TextBox>
            </div>
            <div>
                <p>Email</p>
                <TextBox id='Email' functionToRun = {setEmail}></TextBox>
            </div>
            <div>
                <Button content = 'Submit' functionToRun = {loadApi}></Button>
            </div>
        </div>
    )

}

export default ApiCall;