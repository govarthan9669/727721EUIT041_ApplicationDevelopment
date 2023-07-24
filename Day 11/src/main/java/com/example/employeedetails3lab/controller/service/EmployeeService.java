package com.example.employeedetails3lab.controller.service;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeedetails3lab.controller.repository.EmployeeRepo;
import com.example.employeedetails3lab.model.Employee;


@Service
public class EmployeeService {
    @Autowired
    EmployeeRepo employeeRepo;
    public boolean addEmployee(Employee employee)
    {
        return employeeRepo.save(employee)!=null?true:false;
    }
    public List <Employee> getAllEmployees()
    {
        return employeeRepo.findAll();
    }
    public Employee getEmployeeById(int id)
    {
        return employeeRepo.findById(id).get();
    }
    }
