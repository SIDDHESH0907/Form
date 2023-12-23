import React, { useState } from "react";
import "./Form.css";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function Form() {

    const [formData, setFormData] = useState({
        username: "",
        useremail: "",
        usercourse:"java",
        usergender:"",
        useragreement:false

    })

    const captureForm = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:event.target.type === "checkbox"?event.target.checked:event.target.value
        })
    }

    const submitForm = (event) =>{
        event.preventDefault();
        console.log(formData);
    }

  return (
    <>
      <form onSubmit={submitForm}>

        <label htmlFor="username">Name: </label>
        <input type="text" name="username" id="username" onChange={captureForm}/>
        <br />

        <label htmlFor="useremail">Email: </label>
        <input type="useremail" name="useremail" id="useremail"  onChange={captureForm}/>
        <br />
        
        <label htmlFor="usercourse">Course: </label>
        <select name="usercourse" id="usercourse" onChange={captureForm}>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="js">Javascript</option>
          <option value="react">React</option>
        </select>
        <br />
        
        <label htmlFor="usergender">Gender: </label>
        <input type="radio" name="usergender" id="usergender"  onChange={captureForm}/>M
        <input type="radio" name="usergender" id="usergender"  onChange={captureForm}/>F
        <br />
        
        <input type="checkbox" name="useragreement" id="useragreement"  onChange={captureForm}/>
        Agree terms and conditions
        <br />
        
        <button type="submit">Submit</button>
        <br />
        
      
      </form>
        <p className="data">Data {JSON.stringify(formData)}</p>
    </>
  );
}

export default Form;
