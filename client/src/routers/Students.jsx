import React, { useEffect, useState } from "react";
import "../App.css";


function Students() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3">Node Students</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}


export default Students;