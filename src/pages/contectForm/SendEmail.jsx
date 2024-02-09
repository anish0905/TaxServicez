import React, { useState } from 'react';
import "./contect1.css"

const SendEmail = () => {
    const[email , setEmail] =useState("");
    const[message , setMessage] =useState("");

    const emailValidation=()=>{
        const regEx = /[a-zA-Z,_%+-]+@[a-z0-9.-]+[a-z]{2,8}(\.[a-z{2,8}])?/g;
      if(regEx.test(email))
      {
        setMessage("Email is valid")
      }
      else if(!regEx.test(email)&& email !=="")
      {
        setMessage("Email is not valid");
      }
      else{
        setMessage("")
      }
    };
    const handelOnChange=(e)=>{
        setEmail(e.target.value)
    }
  return (
    <>
    <section>
    <h1>Send Email </h1>
    <div className="containerC">

<form action="https://formspree.io/f/mkndjaaj" method='post'>
<table>

<span style={{fontSize:"25px", color:"red", backgroundColor:"danger"}}> {message}</span>
<tr>

        <td><input type="email" placeholder='Enter your email' name='Email' value={email} onChange={handelOnChange}   /> </td>


    </tr>

    <tr>
     
        <td><input type="text" placeholder='Enter your name' name='Name' /></td>
    </tr>

    


    <tr>
       
        <td><input type="text" placeholder='Enter your mobile no'  name='Mobile no'/></td>
    </tr>

    <tr>
       
        <td><textarea name="Message" id="" cols="30" rows="10" placeholder="Describe yourself here..."></textarea></td>
    </tr>



 
   <button onClick={emailValidation}  id='input1'>Send</button>
</table>




</form>


    </div>
    </section>
    </>
    )

};

export default SendEmail;
