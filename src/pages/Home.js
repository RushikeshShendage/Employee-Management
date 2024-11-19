import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [employees, setEmployee] = useState([]);

  // const {id}=useParams();

  useEffect(() => {
    loadEmployee();
  }, []);
  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:8080/emp_list");
    setEmployee(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/emp_delete/${id}`);
    loadEmployee();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Salary</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.id}</td>
                <td>{employee.fullname}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
                <td>{employee.mobileno}</td>
                <td>{employee.salary}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewemp/${employee.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editemployee/${employee.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
