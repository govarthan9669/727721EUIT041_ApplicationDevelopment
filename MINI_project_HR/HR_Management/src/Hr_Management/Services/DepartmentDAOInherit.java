package Hr_Management.Services;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


import Hr_Management.Connect.DatabaseManager;
import Hr_Management.Model.Department;
public class DepartmentDAOInherit {
	   
	public Connection connection = DatabaseManager.connect();
    public void addDepartment(Department department) throws SQLException {
        String query = "INSERT INTO department (dept_id, dept_name) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, department.getDept_id());
            statement.setString(2, department.getDept_name());
            statement.executeUpdate();
        }
    }

    public Department getDepartmentById(int dept_id) throws SQLException {
        String query = "SELECT * FROM department WHERE dept_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, dept_id);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    Department department = new Department();
                    department.setDept_id(resultSet.getInt("dept_id"));
                    department.setDept_name(resultSet.getString("dept_name"));
                    return department;
                }
            }
        }
        return null;
    }

    public List<Department> getAllDepartments() throws SQLException {
        List<Department> departments = new ArrayList<>();
        String query = "SELECT * FROM department";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                Department department = new Department();
                department.setDept_id(resultSet.getInt("dept_id"));
                department.setDept_name(resultSet.getString("dept_name"));
                departments.add(department);
            }
        }
        return departments;
    }

    public void updateDepartment(Department department) throws SQLException {
        String query = "UPDATE department SET dept_name = ? WHERE dept_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, department.getDept_name());
            statement.setInt(2, department.getDept_id());
            statement.executeUpdate();
        }
    }

    public void deleteEmployeeFromDepartment(int dept_id) throws SQLException {
        String query = "DELETE FROM department WHERE dept_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, dept_id);
            statement.executeUpdate();
        }
    }
}