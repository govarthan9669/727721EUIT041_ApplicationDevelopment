package Hr_Management.Services;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import Hr_Management.HRManagementSystem;
import Hr_Management.Connect.DatabaseManager;
import Hr_Management.Model.EmpContact;

public class EmpContactDAO {
	public Connection connection = DatabaseManager.connect();


    public void addEmpContact(EmpContact empContact) throws SQLException {
        String query = "INSERT INTO emp_contact (emp_id, emp_contactno) VALUES (?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, empContact.getEmp_id());
            preparedStatement.setString(2, empContact.getEmp_contactno());

            preparedStatement.executeUpdate();
        }
    }

    public List<EmpContact> getEmpContactsByEmpId(int emp_id) throws SQLException {
        List<EmpContact> empContacts = new ArrayList<>();
        String query = "SELECT * FROM emp_contact WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    EmpContact empContact1 = new EmpContact();
                    empContact1.setEmp_id(resultSet.getInt("emp_id"));
                    empContact1.setEmp_contactno(resultSet.getString("emp_contactno"));
                    empContacts.add(empContact1);
                }
            }
        }
        return empContacts;
    }
    // Method to get all empcontact details
    public List<EmpContact> getAllEmpContacts() throws SQLException {
        List<EmpContact> empContacts = new ArrayList<>();
        String query = "SELECT * FROM emp_contact";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                EmpContact empContact = new EmpContact();
                empContact.setEmp_id(resultSet.getInt("emp_id"));
                empContact.setEmp_contactno(resultSet.getString("emp_contactno"));
                empContacts.add(empContact);
            }
        }
        return empContacts;
    }

    public void updateEmpContact(EmpContact empContact) throws SQLException {
        String query = "UPDATE emp_contact SET emp_contactno = ? WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, empContact.getEmp_contactno());
            preparedStatement.setInt(2, empContact.getEmp_id());

            preparedStatement.executeUpdate();
        }
    }

    
    public boolean isContactNumberExists(String contactNumber) throws SQLException {
        String query = "SELECT COUNT(*) AS count FROM emp_contact WHERE emp_contactno = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, contactNumber);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                resultSet.next();
                int count = resultSet.getInt("count");
                return count > 0;
            }
        }
    }
    public boolean isContactNumber(String contactNumber, int empId) throws SQLException {
        String query = "SELECT COUNT(*) AS count FROM emp_contact WHERE emp_contactno = ? AND emp_id <> ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, contactNumber);
            preparedStatement.setInt(2, empId);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    int count = resultSet.getInt("count");
                    return count > 0;
                }
            }
        }
        return false;
    }
    public void deleteContactByEmpId(int emp_id) throws SQLException {
        String query = "DELETE FROM emp_contact WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            preparedStatement.executeUpdate();
        }
    }
}
