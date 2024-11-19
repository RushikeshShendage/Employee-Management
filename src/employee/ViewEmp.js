import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewEmp() {
  const { id } = useParams(); // Get the id from the URL parameters
  const [employee, setEmployee] = useState({
    fullname: "",
    email: "",
    role: "",
    mobileno: "",
    salary: "",
  });

  useEffect(() => {
    loadEmployee(id); 
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/employee/${id}`);
    setEmployee(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              
              Details of user id : {employee.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>FullName:</b> {employee.fullname}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {employee.email}
                </li>
                <li className="list-group-item">
                  <b>Role:</b> {employee.role}
                </li>
                <li className="list-group-item">
                  <b>Mobile No:</b> {employee.mobileno}
                </li>
                <li className="list-group-item">
                  <b>Salary:</b> {employee.salary}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}