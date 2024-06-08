import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Login() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mt-5 mb-3">Login</h1>
      <div className="p-3 w-25">
        <form action="" className="column text-center">
          <input
            type="email"
            name=""
            id="email"
            placeholder="Input email"
            className="form-control m-3"
          />
          <input
            type="password"
            name=""
            id="passw"
            placeholder="Input password"
            className="form-control m-3"
          />
          <button className="btn btn-warning  m-3">Login</button>
        </form>
      </div>
    </div>
  );
}


export default Login;
