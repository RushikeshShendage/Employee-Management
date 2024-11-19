package com.employee.Employee.Management.controller;

import java.util.List;

import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.Employee.Management.entity.Employee;
import com.employee.Employee.Management.exception.EmplyoeeNotFoundException;
import com.employee.Employee.Management.repository.Employee_Repo;

@RestController
@CrossOrigin("http://localhost:3000")
public class Employee_Controller {
	@Autowired
	private Employee_Repo employee_Repo;

	@PostMapping("/emp_save")
	public Employee createEmployee(@RequestBody Employee newEmployee) {
		return employee_Repo.save(newEmployee);
	}
	
	@GetMapping("/emp_list")
	List<Employee>getAllEmployees(){
		return employee_Repo.findAll();
	}
	

	@GetMapping("/employee/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employee_Repo.findById(id)
                .orElseThrow(() -> new EmplyoeeNotFoundException(id));
    }
	
	@PutMapping("/emp_update/{id}")
	Employee updatEmployee(@RequestBody Employee newEmployee, @PathVariable Long id) {
		return employee_Repo.findById(id)
				.map(employee->{
					employee.setFullname(newEmployee.getFullname());
					employee.setEmail(newEmployee.getEmail());
					employee.setRole(newEmployee.getRole());
					employee.setMobileno(newEmployee.getMobileno());
					employee.setSalary(newEmployee.getSalary());
					return employee_Repo.save(employee);
				}).orElseThrow(()->new EmplyoeeNotFoundException(id));
	}
	
	@DeleteMapping("/emp_delete/{id}")
	String deleteEmployee(@PathVariable Long id) {
		if (!employee_Repo.existsById(id)) {
			throw new EmplyoeeNotFoundException(id);
		}
		employee_Repo.deleteById(id);
		return"Employee withe id"+id+"has been deleted";
	}
}
