package Hr_Management.Model;


public class EmpContact {
    private int emp_id;
    private String emp_contactno;

    public int getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(int emp_id) {
        this.emp_id = emp_id;
    }

    public String getEmp_contactno() {
        return emp_contactno;
    }

    public void setEmp_contactno(String emp_contactno) {
        this.emp_contactno = emp_contactno;
    }
    
    @Override
    public String toString() {
        return "EmpContact{" +
                "emp_id=" + emp_id +
                ", emp_contactno='" + emp_contactno + '\'' +
                '}';
    }
}




