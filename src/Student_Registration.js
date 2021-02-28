import React, { useState } from "react";
import axios from "axios";

export const Student_Registration = () => {
  let initialState = {
    first_name: "",
    last_name: "",
    email: "",
    class: "",
    scetion: "",
  };
  const [student, setStudent] = useState(initialState);
  const registerForSchool = () => {
    var data = {
      first_name: student.first_name,
      last_name: student.last_name,
      email: student.email,
      class: student.class,
      section: student.section,
    };
    axios
      .post("http://localhost:8081/student", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  return (
    <div>
      <form>
        <input
          placeholder="Enter Your First Name"
          type="text"
          name="first_name"
          id=""
          value={student.first_name}
          onChange={handleChange}
        />
        <br></br>
        <input
          placeholder="Enter Your Last Name"
          type="text"
          name="last_name"
          id=""
          value={student.last_name}
          onChange={handleChange}
        />
        <br></br>
        <input
          placeholder="Enter Your Email"
          type="text"
          name="email"
          id=""
          value={student.email}
          onChange={handleChange}
        />
        <br></br>
        <input
          placeholder="Enter Your Class"
          type="text"
          name="class"
          id=""
          value={student.class}
          onChange={handleChange}
        />
        <br></br>
        <input
          placeholder="Enter Your Section"
          type="text"
          name="section"
          id=""
          value={student.section}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="button"
          name=""
          id=""
          onClick={registerForSchool}
          value="Submit"
        />
      </form>
    </div>
  );
};
