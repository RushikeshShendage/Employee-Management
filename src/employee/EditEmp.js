import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate,useParams} from "react-router-dom";
export default function EditEmp() {
  let navigate = useNavigate();

  const { id } = useParams();
  const [employee, setEmployee] = useState({
    fullname: "",
    email: "",
    role: "",
    mobileno: "",
    salary: "",
  });

  const { fullname, email, role, mobileno, salary } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/emp_update/${id}`, employee);
    navigate("/");
  };
  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/emp_update/${id}`);
    setEmployee(result.data);
  };

  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Update Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="FullName" className="form-label">
                FullName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="fullname"
                value={fullname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Role" className="form-label">
                Role
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your role"
                name="role"
                value={role}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Mobile No" className="form-label">
                Mobile No
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your mobile no"
                name="mobileno"
                value={mobileno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Salary" className="form-label">
                Salary
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your salary"
                name="salary"
                value={salary}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-danger mx-2">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-primary" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
