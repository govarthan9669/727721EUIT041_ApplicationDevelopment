package Hr_Management.Services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import Hr_Management.HRManagementSystem;
import Hr_Management.Connect.DatabaseManager;
import Hr_Management.Model.EmpDept;

public class EmpDeptDAO {
	public Connection connection = DatabaseManager.connect();

    // Method to add an employee-department relationship to the emp_dept table
    public void addEmpDept(EmpDept empDept) throws SQLException {
        String query = "INSERT INTO emp_dept (emp_id, dept_id) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, empDept.getEmp_id());
            statement.setInt(2, empDept.getDept_id());
            statement.executeUpdate();
        }
    }

    // Method to get all employee-department relationships from the emp_dept table
    public List<EmpDept> getAllEmpDepts() throws SQLException {
        List<EmpDept> empDepts = new ArrayList<>();
        String query = "SELECT emp_id, dept_id FROM emp_dept";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                EmpDept empDept = new EmpDept();
                empDept.setEmp_id(resultSet.getInt("emp_id"));
                empDept.setDept_id(resultSet.getInt("dept_id"));
                empDepts.add(empDept);
            }
        }
        return empDepts;
    }
    
    public EmpDept getEmpDeptByEmpId(int empId) throws SQLException {
        String query = "SELECT * FROM emp_dept WHERE emp_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, empId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    EmpDept empDept = new EmpDept();
                    empDept.setEmp_id(resultSet.getInt("emp_id"));
                    empDept.setDept_id(resultSet.getInt("dept_id"));
                    return empDept;
                } else {
                    return null; // Employee-department relationship not found
                }
            }
        }
    }
    
    

 // Method to update an employee's department in the emp_dept table
    public void updateEmpDept(int empId, int deptId) throws SQLException {
        String query = "UPDATE emp_dept SET dept_id = ? WHERE emp_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, deptId);
            statement.setInt(2, empId);
            statement.executeUpdate();
        }
    }


    // Method to delete an employee-department relationship from the emp_dept table by emp_id
    public void deleteEmployeeFromDepartment(int empId) throws SQLException {
        String query = "DELETE FROM emp_dept WHERE emp_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, empId);
            statement.executeUpdate();
        }
    }
}