import React, { useState } from "react";
import "./Form.css";
// Importing user-event utility from testing-library
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function Form() {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    usercourse: "java",
    usergender: "",
    useragreement: false
  });

  // Function to capture form input changes
  const captureForm = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value
    });
  };

  // Function to handle form submission
  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* Form Start */}
      <form onSubmit={submitForm}>

        {/* Name Input */}
        <label htmlFor="username">Name: </label>
        <input type="text" name="username" id="username" onChange={captureForm} />
        <br />

        {/* Email Input */}
        <label htmlFor="useremail">Email: </label>
        <input type="email" name="useremail" id="useremail" onChange={captureForm} />
        <br />

        {/* Course Selection */}
        <label htmlFor="usercourse">Course: </label>
        <select name="usercourse" id="usercourse" onChange={captureForm}>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="js">Javascript</option>
          <option value="react">React</option>
        </select>
        <br />

        {/* Gender Selection */}
        <label htmlFor="usergender">Gender: </label>
        <input type="radio" name="usergender" id="usergender" onChange={captureForm} />M
        <input type="radio" name="usergender" id="usergender" onChange={captureForm} />F
        <br />

        {/* Agreement Checkbox */}
        <input type="checkbox" name="useragreement" id="useragreement" onChange={captureForm} />Agree terms and conditions
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
        <br />

      </form>
      {/* Form End */}

      {/* Displaying Form Data */}
      <p className="data">Data {JSON.stringify(formData)}</p>
    </>
  );
}

export default Form;
