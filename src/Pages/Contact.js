import React, {useEffect, useState} from "react";


function Contact()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[message, setMessage] = useState("");

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

    return(
        <div className= "basic-container">
            <h2>Contact</h2>
            <form>
                <label>Name</label>
                <input type={"text"} name = "name" onChange={handleInputChange} ></input>
                <label>Email Address</label>
                <input type={"text"} name = "email" onChange={handleInputChange}></input>
                <label>Message</label>
                <textarea></textarea>
                <input type={"submit"} onChange={handleInputChange}></input>
            </form>
        </div>
    )
}

export default Contact;