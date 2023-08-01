package Hr_Management.Model;


import java.sql.Date;

public class Dependents {
    private int emp_id;
    private String dep_name;
    private String dep_relationship;
    private Date dep_dob;
    private String dep_contactno;

    public int getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(int emp_id) {
        this.emp_id = emp_id;
    }

    public String getDep_name() {
        return dep_name;
    }

    public void setDep_name(String dep_name) {
        this.dep_name = dep_name;
    }

    public String getDep_relationship() {
        return dep_relationship;
    }

    public void setDep_relationship(String dep_relationship) {
        this.dep_relationship = dep_relationship;
    }

    public Date getDep_dob() {
        return dep_dob;
    }

    public void setDep_dob(Date dep_dob) {
        this.dep_dob = dep_dob;
    }

    public String getDep_contactno() {
        return dep_contactno;
    }

    public void setDep_contactno(String dep_contactno) {
        this.dep_contactno = dep_contactno;
    }
    
    @Override
    public String toString() {
        return "Employee ID: " + this.emp_id +
               "\nDependent Name: " + this.dep_name +
               "\nRelationship: " + this.dep_relationship +
               "\nDate of Birth: " + this.dep_dob +
               "\nContact Number: " + this.dep_contactno;
    }
}