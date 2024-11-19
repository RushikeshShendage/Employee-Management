package com.employee.Employee.Management.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class EmployeeNotFoundAdvice {
	@ResponseBody
	@ExceptionHandler(EmplyoeeNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, String> exceptionHandler(EmplyoeeNotFoundException exception) {
		Map<String, String> errorMap = new HashMap<>();
		errorMap.put("error message", exception.getMessage());
		return errorMap;
	}
}
