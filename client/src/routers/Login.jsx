import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "./LoginValidation.js";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };

  const handleInput = (event) => {
    //event.preventDefault();
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
    console.log("values from input");
    console.log(values);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mt-5 mb-3">Login</h1>
      <div className="p-3 w-25">
        <form action="" className="column text-center" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-warning  m-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
