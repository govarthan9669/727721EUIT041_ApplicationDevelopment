package com.example.employeedetails3lab.controller.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employeedetails3lab.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {
    
}

