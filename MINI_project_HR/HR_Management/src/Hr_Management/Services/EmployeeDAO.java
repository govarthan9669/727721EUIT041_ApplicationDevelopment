package Hr_Management.Services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import Hr_Management.HRManagementSystem;
import Hr_Management.Connect.DatabaseManager;
import Hr_Management.Model.Employee;

public class EmployeeDAO {
	public Connection connection = DatabaseManager.connect();


    // Method to add an employee
    public void addEmployee(Employee employee) throws SQLException {
        String query = "INSERT INTO employee (emp_id, emp_name, emp_email, emp_dob, emp_doj, emp_role, emp_salary) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, employee.getEmp_id());
            preparedStatement.setString(2, employee.getEmp_name());
            preparedStatement.setString(3, employee.getEmp_email());
            preparedStatement.setDate(4, new java.sql.Date(employee.getEmp_dob().getTime()));
            preparedStatement.setDate(5, new java.sql.Date(employee.getEmp_doj().getTime()));
            preparedStatement.setString(6, employee.getEmp_role());
            preparedStatement.setBigDecimal(7, employee.getEmp_salary());
            preparedStatement.executeUpdate();
        }
    }

    // Method to get an employee by emp_id
    public Employee getEmployeeById(int emp_id) throws SQLException {
        String query = "SELECT * FROM employee WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    Employee employee = new Employee();
                    employee.setEmp_id(resultSet.getInt("emp_id"));
                    employee.setEmp_name(resultSet.getString("emp_name"));
                    employee.setEmp_email(resultSet.getString("emp_email"));
                    employee.setEmp_dob(resultSet.getDate("emp_dob"));
                    employee.setEmp_doj(resultSet.getDate("emp_doj"));
                    employee.setEmp_role(resultSet.getString("emp_role"));
                    employee.setEmp_salary(resultSet.getBigDecimal("emp_salary"));
                    return employee;
                } else {
                    return null; // Employee not found
                }
            }
        }
    }
    
    // Method to get all employees
    public List<Employee> getAllEmployee() throws SQLException {
        List<Employee> employees = new ArrayList<>();
        String query = "SELECT * FROM employee";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                Employee employee = new Employee();
                employee.setEmp_id(resultSet.getInt("emp_id"));
                employee.setEmp_name(resultSet.getString("emp_name"));
                employee.setEmp_email(resultSet.getString("emp_email"));
                employee.setEmp_dob(resultSet.getDate("emp_dob"));
                employee.setEmp_doj(resultSet.getDate("emp_doj"));
                employee.setEmp_role(resultSet.getString("emp_role"));
                employee.setEmp_salary(resultSet.getBigDecimal("emp_salary"));
                employees.add(employee);
            }
        }
        return employees;
    }

    // Method to update an employee
    public void updateEmployee(Employee employee) throws SQLException {
        String query = "UPDATE employee SET emp_name = ?, emp_email = ?, emp_dob = ?, emp_doj = ?, emp_role = ?, emp_salary = ? WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, employee.getEmp_name());
            preparedStatement.setString(2, employee.getEmp_email());
            preparedStatement.setDate(3, new java.sql.Date(employee.getEmp_dob().getTime()));
            preparedStatement.setDate(4, new java.sql.Date(employee.getEmp_doj().getTime()));
            preparedStatement.setString(5, employee.getEmp_role());
            preparedStatement.setBigDecimal(6, employee.getEmp_salary());
            preparedStatement.setInt(7, employee.getEmp_id());
            preparedStatement.executeUpdate();
        }
    }

    // Method to delete an employee and related records
    public void deleteEmployee(int emp_id) throws SQLException {
        // First, delete records from related tables (emp_address, emp_contact, dependents, emp_dept)
        deleteAddressByEmpId(emp_id);
        deleteContactByEmpId(emp_id);
        deleteDependentsByEmpId(emp_id);
        deleteEmployeeFromDepartment(emp_id);
        
        // Then, delete the employee from the employee table
        String query = "DELETE FROM employee WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            preparedStatement.executeUpdate();
        }
    }
    
    // Helper methods to delete related records
    private void deleteAddressByEmpId(int emp_id) throws SQLException {
        String query = "DELETE FROM emp_address WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            preparedStatement.executeUpdate();
        }
    }

    private void deleteContactByEmpId(int emp_id) throws SQLException {
        String query = "DELETE FROM emp_contact WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            preparedStatement.executeUpdate();
        }
    }

    private void deleteDependentsByEmpId(int emp_id) throws SQLException {
        String query = "DELETE FROM dependents WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            preparedStatement.executeUpdate();
        }
    }

    private void deleteEmployeeFromDepartment(int emp_id) throws SQLException {
        String query = "DELETE FROM emp_dept WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            preparedStatement.executeUpdate();
        }
    }

    // Method to get all employees
    public List<Employee> getAllEmployees() throws SQLException {
        List<Employee> employees = new ArrayList<>();
        String query = "SELECT * FROM employee";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                Employee employee = new Employee();
                employee.setEmp_id(resultSet.getInt("emp_id"));
                employee.setEmp_name(resultSet.getString("emp_name"));
                employee.setEmp_email(resultSet.getString("emp_email"));
                employee.setEmp_dob(resultSet.getDate("emp_dob"));
                employee.setEmp_doj(resultSet.getDate("emp_doj"));
                employee.setEmp_role(resultSet.getString("emp_role"));
                employee.setEmp_salary(resultSet.getBigDecimal("emp_salary"));
                employees.add(employee);
            }
        }
        return employees;
    }
    
    
   
}