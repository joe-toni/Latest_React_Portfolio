import React from "react";
import { Form } from "react-bootstrap";

function Contact()
{
    return(
        <div className= "contactForm-container">
            <h2>Contact</h2>
            <form>
                <label>Name:</label>
                <input type={"text"}></input>
                <label>Email Address:</label>
                <input type={"text"}></input>
                <label>Message:</label>
                <textarea></textarea>
                <input type={"submit"}></input>
            </form>
        </div>
    )
}

export default Contact;