package com.employee.Employee.Management.exception;

public class EmplyoeeNotFoundException extends RuntimeException{
	public EmplyoeeNotFoundException(Long id) {
		super("Could not found employee id"+id);
	}

}
