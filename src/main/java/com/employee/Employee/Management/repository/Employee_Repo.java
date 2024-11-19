package com.employee.Employee.Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.Employee.Management.entity.Employee;

public interface Employee_Repo extends JpaRepository<Employee, Long> {

}
