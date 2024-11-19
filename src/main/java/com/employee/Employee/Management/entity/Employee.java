package com.employee.Employee.Management.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Employee_Management")
public class Employee {
	@Id
	@GeneratedValue
	public Long id;
	@Column(name = "fullname")
	public String fullname;
	@Column(name = "email")
	public String email;
	@Column(name = "role")
	public String role;
	@Column(name = "mobilrno")
	public String mobileno;
	@Column(name = "salary")
	public String salary;

	public Employee(Long id, String fullname, String email, String role, String mobileno, String salary) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.email = email;
		this.role = role;
		this.mobileno = mobileno;
		this.salary = salary;
	}

	public Employee() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", fullname=" + fullname + ", email=" + email + ", role=" + role + ", mobileno="
				+ mobileno + ", salary=" + salary + "]";
	}

}