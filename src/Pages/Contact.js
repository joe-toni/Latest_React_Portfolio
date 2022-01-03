import React, {useState} from "react";
import {validateEmail} from '../utils/helpers';

//This react component will house the contact page and is meant to check if the use has given valid inputs in each field
function Contact()
{
    //Here we are establishing several use State variables with one for each input field to track their values, one to track which input field
    //was most recently interacted with, and one to contain any error messages that will conditionally render.
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const[Message, setMessage] = useState("");
    const[Prev, setPrevious] = useState("");
    const[Error, setError] = useState("");

    //This is the standard handle change function meant to save any user input to the corresponding use state variable based on the event target
    const handleInputChange = (e) =>
    {
        const {name, value} = e.target;
        if (name === "name")
            {return setName(value);}
        else if (name === "email")
            {return setEmail(value);}
        else if (name === "message")
            {return setMessage(value);}
    }; 

    //This function checks if the most recently selected input field was given any valid value returning a corresponding error if not.
    const checkPrevForValue = (e) =>
    {
        e.stopPropagation();
        if (Prev === "name" && Name === "")
            {return setError("A name is requiered")}
        else if (Prev === "email" && Email === "")
            {return setError("An email is required")}
        else if (Prev === "message" && Message === "")
            { return setError("A message is required")}
        else
            {return setError("");}
    };
    
    //This function checks if all the fields have been filled out before checking if the user has given a validly formated email returning an error if not
    //and reseting all the use State variables if all is correct.
    const handleFormSubmit = (e) =>
    {
        e.preventDefault();
        if(!Name || !Email || !Message)
        {return setError("All fields must be filled out");}
        else if (!validateEmail(Email))
        {return setError("Invalid Email");}
        else
        {
            setName("");
            setEmail("");
            setMessage("");
            setPrevious("");
            setError("");
        }   
    };
   
    //This component returns a form with several input fields, each input field has three event listeners assigned, one to track a chance in value, one to track if its been selected, and one
    //to check the value of the field once it has been de-selected.
    return(
        <div className= "basic-container">
            <h2>Contact</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input type={"text"} name = "name" onChange={handleInputChange} onSelect={() => setPrevious("name")} onBlur = {checkPrevForValue} value={Name}></input>
                <label>Email Address</label>
                <input type={"text"} name = "email" onChange={handleInputChange}  onSelect={ () => setPrevious("email")} onBlur = {checkPrevForValue} value={Email}></input>
                <label>Message</label>
                <textarea name = "message" onChange={handleInputChange} onSelect={() => setPrevious("message")} onBlur = {checkPrevForValue} value = {Message}></textarea>
                <label>{Error}</label>
                <input type={"submit"}  className = "btn"></input>
                
            </form>
        </div>
    )
}

export default Contact;