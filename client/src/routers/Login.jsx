import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "./LoginValidation.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:3001/users", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/students");
          } else {
            alert("No record exised");
          }
        })
        .catch((err) => console.log(err));
    }
  };


  const handleInput = (event) => {
    //event.preventDefault();
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };


  return (
    <div className="container d-flex  flex-column justify-content-center align-items-center">
      <h1 className="text-center mt-5 mb-3">Login</h1>
      <div className="p-3 w-25">
        <form
          action=""
          className="column text-center"
          onSubmit={handleSubmit}
          method="post"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Input email"
            className="form-control m-3"
            onChange={handleInput}
            required
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
          <input
            type="password"
            name="password"
            id="passw"
            placeholder="Input password"
            className="form-control m-3"
            onChange={handleInput}
            required
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
          <button type="submit" className="btn btn-warning my-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


export default Login;


