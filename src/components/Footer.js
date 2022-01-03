import React from "react";
//This is the footer component that will house three links to personal accounts and be used on multiple pages.
function Footer() 
{
    return (
        <div className = "footer-container">
            <a  href = "https://github.com/joe-toni" target = "_blank" rel = "noreferrer">GitHub</a>
            <a  href = "https://www.linkedin.com/in/jose-faburrieta-48b857212/" target = "_blank" rel = "noreferrer">Linkedin</a>
            <a href = "https://stackoverflow.com/users/16057085/joe-toni" target= "_blank" rel = "noreferrer">StackOverflow</a>
        </div>
    )
}

export default Footer;