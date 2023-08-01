package Hr_Management.Model;

public class EmpAddress {
    private int emp_id;
    private String emp_doorno;
    private String emp_street;
    private String emp_area;
    private String emp_district;
    private String emp_pincode;
    private String emp_state;

    public int getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(int emp_id) {
        this.emp_id = emp_id;
    }

    public String getEmp_doorno() {
        return emp_doorno;
    }

    public void setEmp_doorno(String emp_doorno) {
        this.emp_doorno = emp_doorno;
    }

    public String getEmp_street() {
        return emp_street;
    }

    public void setEmp_street(String emp_street) {
        this.emp_street = emp_street;
    }

    public String getEmp_area() {
        return emp_area;
    }

    public void setEmp_area(String emp_area) {
        this.emp_area = emp_area;
    }

    public String getEmp_district() {
        return emp_district;
    }

    public void setEmp_district(String emp_district) {
        this.emp_district = emp_district;
    }

    public String getEmp_pincode() {
        return emp_pincode;
    }

    public void setEmp_pincode(String emp_pincode) {
        this.emp_pincode = emp_pincode;
    }

    public String getEmp_state() {
        return emp_state;
    }

    public void setEmp_state(String emp_state) {
        this.emp_state = emp_state;
    }
    
    @Override
    public String toString() {
        return "Employee Address: " +
               "ID=" + emp_id +
               ", Door No='" + emp_doorno + '\'' +
               ", Street='" + emp_street + '\'' +
               ", Area='" + emp_area + '\'' +
               ", District='" + emp_district + '\'' +
               ", Pincode='" + emp_pincode + '\'' +
               ", State='" + emp_state + '\'';
    }

}

