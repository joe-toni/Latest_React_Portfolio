import React, {useEffect, useState} from "react";


function Contact()
{
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const[Message, setMessage] = useState("");
    const[Prev, setPrevious] = useState("");
    const[Error, setError] = useState("");

    const handleInputChange = (e) =>
    {
        const {name, value} = e.target;
        if (name === "name")
            {return setName(value);}
        else if (name === "email")
            {return setEmail(value);}
        else if (name === "message")
            {return setMessage(value);}
        else if (name === "page")
            {return }
    }; 

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
    }
    
   


    return(
        <div className= "basic-container">
            <h2>Contact</h2>
            <form >
                <label>Name</label>
                <input type={"text"} name = "name" onChange={handleInputChange} onSelect={() => setPrevious("name")} onBlur = {checkPrevForValue}></input>
                <label>Email Address</label>
                <input type={"text"} name = "email" onChange={handleInputChange}  onSelect={ () => setPrevious("email")} onBlur = {checkPrevForValue}></input>
                <label>Message</label>
                <textarea name = "message" onChange={handleInputChange} onSelect={() => setPrevious("message")} onBlur = {checkPrevForValue}></textarea>
                <label>{Error}</label>
                <input type={"submit"}  className = "btn"></input>
                
            </form>
            
        </div>
    )
}

export default Contact;