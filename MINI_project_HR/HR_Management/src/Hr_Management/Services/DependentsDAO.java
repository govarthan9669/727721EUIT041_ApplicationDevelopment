package Hr_Management.Services;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import Hr_Management.HRManagementSystem;
import Hr_Management.Connect.DatabaseManager;
import Hr_Management.Model.Dependents;

public class DependentsDAO {

	public Connection connection = DatabaseManager.connect();

    public void addDependent(Dependents dependent) throws SQLException {
        String query = "INSERT INTO dependents (emp_id, dep_name, dep_relationship, dep_dob, dep_contactno) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, dependent.getEmp_id());
            preparedStatement.setString(2, dependent.getDep_name());
            preparedStatement.setString(3, dependent.getDep_relationship());
            preparedStatement.setDate(4, new java.sql.Date(dependent.getDep_dob().getTime()));
            preparedStatement.setString(5, dependent.getDep_contactno());

            preparedStatement.executeUpdate();
        }
    }
    
    public List<Dependents> getAllDependents() throws SQLException {
        List<Dependents> dependentsList = new ArrayList<>();
        String query = "SELECT * FROM dependents";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                Dependents dependent = new Dependents();
                dependent.setEmp_id(resultSet.getInt("emp_id"));
                dependent.setDep_name(resultSet.getString("dep_name"));
                dependent.setDep_relationship(resultSet.getString("dep_relationship"));
                dependent.setDep_dob(resultSet.getDate("dep_dob"));
                dependent.setDep_contactno(resultSet.getString("dep_contactno"));
                dependentsList.add(dependent);
            }
        }
        return dependentsList;
    }

 // In DependentsDAO class
    public List<Dependents> getDependentsByEmpId(int emp_id) throws SQLException {
        List<Dependents> dependentsList = new ArrayList<>();
        String query = "SELECT * FROM dependents WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    Dependents dependent1 = new Dependents();
                    dependent1.setEmp_id(resultSet.getInt("emp_id"));
                    dependent1.setDep_name(resultSet.getString("dep_name"));
                    dependent1.setDep_relationship(resultSet.getString("dep_relationship"));
                    dependent1.setDep_dob(resultSet.getDate("dep_dob"));
                    dependent1.setDep_contactno(resultSet.getString("dep_contactno"));
                    dependentsList.add(dependent1);
                }
            }
        }
        return dependentsList;
    }



    public void updateDependent(Dependents dependent) throws SQLException {
        String query = "UPDATE dependents SET dep_name = ?, dep_relationship = ?, dep_dob = ?, dep_contactno = ? WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, dependent.getDep_name());
            preparedStatement.setString(2, dependent.getDep_relationship());
            preparedStatement.setDate(3, new java.sql.Date(dependent.getDep_dob().getTime()));
            preparedStatement.setString(4, dependent.getDep_contactno());
            preparedStatement.setInt(5, dependent.getEmp_id());

            preparedStatement.executeUpdate();
        }
    }

    public void deleteDependentsByEmpId(int emp_id) throws SQLException {
        String query = "DELETE FROM dependents WHERE emp_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, emp_id);
            preparedStatement.executeUpdate();
        }
    }
}