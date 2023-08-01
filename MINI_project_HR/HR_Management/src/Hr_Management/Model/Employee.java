package Hr_Management.Model;


import java.math.BigDecimal;
import java.util.Date;

public class Employee {
    private int emp_id;
    private String emp_name;
    private String emp_email;
    private Date emp_dob;
    private Date emp_doj;
    private String emp_role;
    private BigDecimal emp_salary;

    // Constructors
    public Employee() {
    }

    public Employee(int emp_id, String emp_name, String emp_email, Date emp_dob, Date emp_doj, String emp_role, BigDecimal emp_salary) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_email = emp_email;
        this.emp_dob = emp_dob;
        this.emp_doj = emp_doj;
        this.emp_role = emp_role;
        this.emp_salary = emp_salary;
    }

    // Getters and setters
    public int getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(int emp_id) {
        this.emp_id = emp_id;
    }

    public String getEmp_name() {
        return emp_name;
    }

    public void setEmp_name(String emp_name) {
        this.emp_name = emp_name;
    }

    public String getEmp_email() {
        return emp_email;
    }

    public void setEmp_email(String emp_email) {
        this.emp_email = emp_email;
    }

    public Date getEmp_dob() {
        return emp_dob;
    }

    public void setEmp_dob(Date emp_dob) {
        this.emp_dob = emp_dob;
    }

    public Date getEmp_doj() {
        return emp_doj;
    }

    public void setEmp_doj(Date emp_doj) {
        this.emp_doj = emp_doj;
    }

    public String getEmp_role() {
        return emp_role;
    }

    public void setEmp_role(String emp_role) {
        this.emp_role = emp_role;
    }

    public BigDecimal getEmp_salary() {
        return emp_salary;
    }

    public void setEmp_salary(BigDecimal emp_salary) {
        this.emp_salary = emp_salary;
    }
    
    // Add this custom toString() method
    
//    @Override
    public String toString() {
        return "Employee ID: " + emp_id +
                "\nEmployee Name: " + emp_name +
                "\nEmployee Email: " + emp_email +
                "\nDate of Birth: " + emp_dob +
                "\nDate of Joining: " + emp_doj +
                "\nEmployee Role: " + emp_role +
                "\nEmployee Salary: " + emp_salary;
    }
//    public void displayEmployeeInfo() {
//        System.out.println("Employee ID: " + emp_id);
//        System.out.println("Employee Name: " + emp_name);
//        System.out.println("Employee Email: " + emp_email);
//        System.out.println("Date of Birth: " + emp_dob);
//        System.out.println("Date of Joining: " + emp_doj);
//        System.out.println("Employee Role: " + emp_role);
//        System.out.println("Employee Salary: " + emp_salary);
//    }
//
//    
//    public void displayEmployeeInfo(boolean includeSalary) {
//        System.out.println("Employee ID: " + emp_id);
//        System.out.println("Employee Name: " + emp_name);
//        System.out.println("Employee Email: " + emp_email);
//        System.out.println("Date of Birth: " + emp_dob);
//        System.out.println("Date of Joining: " + emp_doj);
//        System.out.println("Employee Role: " + emp_role);
//        if (includeSalary) {
//            System.out.println("Employee Salary: " + emp_salary);
//        }
//    }
    
    public void displayEmployeeInfo() {
        System.out.println("Employee ID: " + emp_id);
        System.out.println("Employee Name: " + emp_name);
        System.out.println("Employee Email: " + emp_email);
        System.out.println("Date of Birth: " + emp_dob);
        System.out.println("Date of Joining: " + emp_doj);
        System.out.println("Employee Role: " + emp_role);
        System.out.println("Employee Salary: " + emp_salary);
    }

    public void displayEmployeeInfo(boolean includeSalary) {
        if (includeSalary) {
            displayEmployeeInfo(); // Call the existing method to display all details, including salary
        } else {
            // Display all details except salary
            System.out.println("Employee ID: " + emp_id);
            System.out.println("Employee Name: " + emp_name);
            System.out.println("Employee Email: " + emp_email);
            System.out.println("Date of Birth: " + emp_dob);	
            System.out.println("Date of Joining: " + emp_doj);
            System.out.println("Employee Role: " + emp_role);
        }
    }

    public void displayEmployeeDetails(Employee employee, boolean includeSalary) {
        if (employee != null) {
            if (includeSalary) {
                employee.displayEmployeeInfo(); // Display all details, including salary
            } else {
                employee.displayEmployeeInfo(false); // Display all details except salary
            }
        } else {
            System.out.println("Employee not found!");
        }
    }

}