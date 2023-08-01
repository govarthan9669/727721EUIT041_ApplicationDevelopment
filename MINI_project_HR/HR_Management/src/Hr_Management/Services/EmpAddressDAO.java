package Hr_Management.Services;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import Hr_Management.HRManagementSystem;
import Hr_Management.Connect.DatabaseManager;
import Hr_Management.Model.EmpAddress;

public class EmpAddressDAO {
	public Connection connection = DatabaseManager.connect();


    public void addEmpAddress(EmpAddress empAddress) throws SQLException {
        String query = "INSERT INTO emp_address (emp_id, emp_doorno, emp_street, emp_area, emp_district, emp_pincode, emp_state) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, empAddress.getEmp_id());
            preparedStatement.setString(2, empAddress.getEmp_doorno());
            preparedStatement.setString(3, empAddress.getEmp_street());
            preparedStatement.setString(4, empAddress.getEmp_area());
            preparedStatement.setString(5, empAddress.getEmp_district());
            preparedStatement.setString(6, empAddress.getEmp_pincode());
            preparedStatement.setString(7, empAddress.getEmp_state());

            preparedStatement.executeUpdate();
        }
    }

    public List<EmpAddress> getEmpAddressesByEmpId(int emp_id) throws SQLException {
        List<EmpAddress> empAddresses = new ArrayList<>();
        String query = "SELECT * FROM emp_address WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    EmpAddress empAddress1 = new EmpAddress();
                    empAddress1.setEmp_id(resultSet.getInt("emp_id"));
                    empAddress1.setEmp_doorno(resultSet.getString("emp_doorno"));
                    empAddress1.setEmp_street(resultSet.getString("emp_street"));
                    empAddress1.setEmp_area(resultSet.getString("emp_area"));
                    empAddress1.setEmp_district(resultSet.getString("emp_district"));
                    empAddress1.setEmp_pincode(resultSet.getString("emp_pincode"));
                    empAddress1.setEmp_state(resultSet.getString("emp_state"));
                    empAddresses.add(empAddress1);
                }
            }
        }
        return empAddresses;
    }
    public List<EmpAddress> getAllEmpAddresses() throws SQLException {
        List<EmpAddress> empAddresses = new ArrayList<>();
        String query = "SELECT * FROM emp_address";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                EmpAddress empAddress = new EmpAddress();
                empAddress.setEmp_id(resultSet.getInt("emp_id"));
                empAddress.setEmp_doorno(resultSet.getString("emp_doorno"));
                empAddress.setEmp_street(resultSet.getString("emp_street"));
                empAddress.setEmp_area(resultSet.getString("emp_area"));
                empAddress.setEmp_district(resultSet.getString("emp_district"));
                empAddress.setEmp_pincode(resultSet.getString("emp_pincode"));
                empAddress.setEmp_state(resultSet.getString("emp_state"));
                empAddresses.add(empAddress);
            }
        }
        return empAddresses;
    }

    public void updateEmpAddress(EmpAddress empAddress) throws SQLException {
        String query = "UPDATE emp_address SET emp_doorno = ?, emp_street = ?, emp_area = ?, emp_district = ?, emp_pincode = ?, emp_state = ? WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, empAddress.getEmp_doorno());
            preparedStatement.setString(2, empAddress.getEmp_street());
            preparedStatement.setString(3, empAddress.getEmp_area());
            preparedStatement.setString(4, empAddress.getEmp_district());
            preparedStatement.setString(5, empAddress.getEmp_pincode());
            preparedStatement.setString(6, empAddress.getEmp_state());
            preparedStatement.setInt(7, empAddress.getEmp_id());

            preparedStatement.executeUpdate();
        }
    }

    public void deleteAddressByEmpId(int emp_id) throws SQLException {
        String query = "DELETE FROM emp_address WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            preparedStatement.executeUpdate();
        }
    }
}