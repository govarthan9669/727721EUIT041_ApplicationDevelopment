package Hr_Management;

import java.math.BigDecimal;
import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

import Hr_Management.Connect.DatabaseManager;
import Hr_Management.Model.Department;
import Hr_Management.Model.Dependents;
import Hr_Management.Model.EmpAddress;
import Hr_Management.Model.EmpContact;
import Hr_Management.Model.EmpDept;
import Hr_Management.Model.Employee;
import Hr_Management.Services.DepartmentDAO;
import Hr_Management.Services.DependentsDAO;
import Hr_Management.Services.EmpAddressDAO;
import Hr_Management.Services.EmpContactDAO;
import Hr_Management.Services.EmpDeptDAO;
import Hr_Management.Services.EmployeeDAO;

public class HRManagementSystem {


    private static final Scanner scanner = new Scanner(System.in);
    private static final EmployeeDAO employeeDAO = new EmployeeDAO();
    private static final EmpAddressDAO empAddressDAO = new EmpAddressDAO();
    private static final EmpContactDAO empContactDAO = new EmpContactDAO();
    private static final DependentsDAO dependentsDAO = new DependentsDAO();
    private static final DepartmentDAO departmentDAO = new DepartmentDAO();
    private static final EmpDeptDAO empDeptDAO = new EmpDeptDAO();

    public static void main(String[] args) {
    	Connection connection = DatabaseManager.connect();

      try {
            while (true) {
                displayMenu();
                System.out.print("Enter your choice: ");
                int choice = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                switch (choice) {
                    case 1:
                        // Add Employee
                    	
                        Employee employee = new Employee();
                        
                        System.out.print("Enter Employee id: ");
                        employee.setEmp_id(scanner.nextInt());
                        scanner.nextLine();
                        System.out.print("Enter Employee Name: ");
                        employee.setEmp_name(scanner.nextLine());
                        System.out.print("Enter Employee Email: ");
                        employee.setEmp_email(scanner.nextLine());
                        System.out.print("Enter Employee Date of Birth (YYYY-MM-DD): ");
                        employee.setEmp_dob(java.sql.Date.valueOf(scanner.nextLine()));
                        System.out.print("Enter Employee Date of Joining (YYYY-MM-DD): ");
                        employee.setEmp_doj(java.sql.Date.valueOf(scanner.nextLine()));
                        System.out.print("Enter Employee Role: ");
                        employee.setEmp_role(scanner.nextLine());
                        System.out.print("Enter Employee Salary: ");
                        employee.setEmp_salary(scanner.nextBigDecimal());
                        scanner.nextLine();  // Consume the newline character


                        employeeDAO.addEmployee(employee);
                        System.out.println("Employee added successfully!");
                        break;
                    case 2:
                        // Get Employee Details By Id
                        System.out.print("Enter Employee ID: ");
                        int empId = scanner.nextInt();
                        Employee empDetails = employeeDAO.getEmployeeById(empId);
                        if (empDetails != null) {
                            System.out.println("Employee Details:");
                            System.out.println(empDetails);
                        } else {
                            System.out.println("Employee not found!");
                        }
                        break;
                        
                    case 3: // Get all the Employee details
                        try {
                            List<Employee> allEmployees = employeeDAO.getAllEmployees();
                            if (!allEmployees.isEmpty()) {
                                System.out.println("All Employees:");
                                for (Employee employee8 : allEmployees) {
                                    System.out.println("-----------------------");
                                    System.out.println("Employee ID: " + employee8.getEmp_id());
                                    // Ask the user whether to include salary or not
                                    System.out.print("Do you want to display the Employee's salary? (true/false): ");
                                    boolean includeSalary = scanner.nextBoolean();
                                    scanner.nextLine(); // Consume the newline character
                                    // Call the appropriate method based on the user's choice
                                    employee8.displayEmployeeDetails(employee8, includeSalary);
                                }
                            } else {
                                System.out.println("No employees found!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching employee details: " + e.getMessage());
                        }
                        break;


                        
                    case 4:
                        // Update Employee Details
                    	
                    	System.out.print("Enter Employee ID: ");
                    	int empIdToUpdate = scanner.nextInt();
                    	scanner.nextLine(); // Consume the newline character

                    	// Create an instance of the EmployeeDAO to perform database operations
                    	EmployeeDAO employeeDAO2 = new EmployeeDAO();

                    	try {
                    	    // Get the employee details for the provided employee ID
                    	    Employee employeeToUpdate = employeeDAO2.getEmployeeById(empIdToUpdate);

                    	    if (employeeToUpdate != null) {
                    	        System.out.println("Current Employee Details:");
                    	        System.out.println("Name: " + employeeToUpdate.getEmp_name());
                    	        System.out.println("Email: " + employeeToUpdate.getEmp_email());
                    	        System.out.println("Date of Birth: " + employeeToUpdate.getEmp_dob());
                    	        System.out.println("Date of Joining: " + employeeToUpdate.getEmp_doj());
                    	        System.out.println("Role: " + employeeToUpdate.getEmp_role());
                    	        System.out.println("Salary: " + employeeToUpdate.getEmp_salary());

                    	        System.out.print("Enter Employee Name (Press Enter to skip): ");
                    	        String updatedName = scanner.nextLine();
                    	        if (!updatedName.isEmpty()) {
                    	            employeeToUpdate.setEmp_name(updatedName);
                    	        }

                    	        System.out.print("Enter Employee Email (Press Enter to skip): ");
                    	        String updatedEmail = scanner.nextLine();
                    	        if (!updatedEmail.isEmpty()) {
                    	            employeeToUpdate.setEmp_email(updatedEmail);
                    	        }

                    	        System.out.print("Enter Employee Date of Birth (YYYY-MM-DD) (Press Enter to skip): ");
                    	        String updatedDob = scanner.nextLine();
                    	        if (!updatedDob.isEmpty()) {
                    	            employeeToUpdate.setEmp_dob(java.sql.Date.valueOf(updatedDob));
                    	        }

                    	        System.out.print("Enter Employee Date of Joining (YYYY-MM-DD) (Press Enter to skip): ");
                    	        String updatedDoj = scanner.nextLine();
                    	        if (!updatedDoj.isEmpty()) {
                    	            employeeToUpdate.setEmp_doj(java.sql.Date.valueOf(updatedDoj));
                    	        }

                    	        System.out.print("Enter Employee Role (Press Enter to skip): ");
                    	        String updatedRole = scanner.nextLine();
                    	        if (!updatedRole.isEmpty()) {
                    	            employeeToUpdate.setEmp_role(updatedRole);
                    	        }

                    	        System.out.print("Enter Employee Salary (Press Enter to skip): ");
                    	        String updatedSalaryStr = scanner.nextLine();
                    	        if (!updatedSalaryStr.isEmpty()) {
                    	            try {
                    	                BigDecimal updatedSalary = new BigDecimal(updatedSalaryStr);
                    	                employeeToUpdate.setEmp_salary(updatedSalary);
                    	            } catch (NumberFormatException e) {
                    	                System.out.println("Invalid salary format. Salary not updated.");
                    	            }
                    	        }

                    	        // Perform the update in the database
                    	        employeeDAO2.updateEmployee(employeeToUpdate);
                    	        System.out.println("Employee details updated successfully!");
                    	    } else {
                    	        System.out.println("Employee not found!");
                    	    }
                    	} catch (SQLException e) {
                    	    System.out.println("Error while updating employee details: " + e.getMessage());
                    	}

                          break;
                        
                        
                    case 5:
                        // Delete Employee
                        System.out.print("Enter Employee ID: ");
                        int empIdToDelete = scanner.nextInt();
                        Employee empToDelete = employeeDAO.getEmployeeById(empIdToDelete);
                        if (empToDelete != null) {
                            employeeDAO.deleteEmployee(empIdToDelete);
                            empAddressDAO.deleteAddressByEmpId(empIdToDelete);
                            empContactDAO.deleteContactByEmpId(empIdToDelete);
                            dependentsDAO.deleteDependentsByEmpId(empIdToDelete);
                            empDeptDAO.deleteEmployeeFromDepartment(empIdToDelete);
                            System.out.println("Employee deleted successfully!");
                        } else {
                            System.out.println("Employee not found!");
                        }
                        break;
                        
                        
                    case 6:
                        // Add Employee Address
                        EmpAddress empAddress = new EmpAddress();
                        System.out.print("Enter Employee ID: ");
                        int empIdForAddress = scanner.nextInt();
                        scanner.nextLine(); // Consume the newline character
                        Employee empForAddress = employeeDAO.getEmployeeById(empIdForAddress);
                        if (empForAddress != null) {
                            empAddress.setEmp_id(empIdForAddress);
                            System.out.print("Enter Door Number: ");
                            empAddress.setEmp_doorno(scanner.nextLine());
                            System.out.print("Enter Street: ");
                            empAddress.setEmp_street(scanner.nextLine());
                            System.out.print("Enter Area: ");
                            empAddress.setEmp_area(scanner.nextLine());
                            System.out.print("Enter District: ");
                            empAddress.setEmp_district(scanner.nextLine());
                            System.out.print("Enter Pincode: ");
                            empAddress.setEmp_pincode(scanner.nextLine());
                            System.out.print("Enter State: ");
                            empAddress.setEmp_state(scanner.nextLine());
                            
                            empAddressDAO.addEmpAddress(empAddress);
                            System.out.println("Employee address added successfully!");
                        } else {
                            System.out.println("Employee not found!");
                        }
                        break;
                        
                     
                    case 7:      
                    	// Get Employee Addresses by Id
                    	System.out.print("Enter Employee ID: ");
                    	int empIdForAddresses = scanner.nextInt();

                    	// Create an instance of the EmpAddressDAO class
                    	EmpAddressDAO empAddressDAO = new EmpAddressDAO();

                    	try {
                    	    // Get the list of employee addresses for the given Employee ID
                    	    List<EmpAddress> empAddresses = empAddressDAO.getEmpAddressesByEmpId(empIdForAddresses);

                    	    if (!empAddresses.isEmpty()) {
                    	        System.out.println("Employee Addresses:");
                    	        for (EmpAddress empAddress1 : empAddresses) {
                    	            System.out.println(empAddress1);
                    	        }
                    	    } else {
                    	        System.out.println("No addresses found for the employee!");
                    	    }
                    	} catch (SQLException e) {
                    	    System.out.println("Error while fetching employee addresses: " + e.getMessage());
                    	}
                    	break;
                    	
                    case 8: // Get all EmpAddress details
                        try {
                        	EmpAddressDAO empAddressDAO5 = new EmpAddressDAO();
                            List<EmpAddress> allEmpAddresses = empAddressDAO5.getAllEmpAddresses();
                            if (!allEmpAddresses.isEmpty()) {
                                System.out.println("All EmpAddresses:");
                                for (EmpAddress empAddress5 : allEmpAddresses) {
                                    System.out.println("Employee ID: " + empAddress5.getEmp_id());
                                    System.out.println("Door No: " + empAddress5.getEmp_doorno());
                                    System.out.println("Street: " + empAddress5.getEmp_street());
                                    System.out.println("Area: " + empAddress5.getEmp_area());
                                    System.out.println("District: " + empAddress5.getEmp_district());
                                    System.out.println("Pincode: " + empAddress5.getEmp_pincode());
                                    System.out.println("State: " + empAddress5.getEmp_state());
                                    System.out.println("-----------------------");
                                }
                            } else {
                                System.out.println("No empaddress records found!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching empaddress details: " + e.getMessage());
                        }
                        break;
                           
                    case 9:
                        // Update Employee Address
                        System.out.print("Enter Employee ID: ");
                        int empIdForAddressUpdate = scanner.nextInt();
                        scanner.nextLine(); // Consume the newline character

                        // Create an instance of the EmpAddressDAO to perform database operations
                        EmpAddressDAO empAddressDAO6 = new EmpAddressDAO();

                        try {
                            // Get the list of employee addresses associated with the provided employee ID
                            List<EmpAddress> empAddressesToUpdate = empAddressDAO6.getEmpAddressesByEmpId(empIdForAddressUpdate);

                            if (!empAddressesToUpdate.isEmpty()) {
                                // Assuming you want to update the first address if there are multiple addresses for the employee
                                EmpAddress empAddressToUpdate = empAddressesToUpdate.get(0);

                                System.out.println("Current Address Details:");
                                System.out.println("Door Number: " + empAddressToUpdate.getEmp_doorno());
                                System.out.println("Street: " + empAddressToUpdate.getEmp_street());
                                System.out.println("Area: " + empAddressToUpdate.getEmp_area());
                                System.out.println("District: " + empAddressToUpdate.getEmp_district());
                                System.out.println("Pincode: " + empAddressToUpdate.getEmp_pincode());
                                System.out.println("State: " + empAddressToUpdate.getEmp_state());

                                System.out.print("Enter Door Number (Press Enter to skip): ");
                                String updatedDoorno = scanner.nextLine();
                                if (!updatedDoorno.isEmpty()) {
                                    empAddressToUpdate.setEmp_doorno(updatedDoorno);
                                }

                                System.out.print("Enter Street (Press Enter to skip): ");
                                String updatedStreet = scanner.nextLine();
                                if (!updatedStreet.isEmpty()) {
                                    empAddressToUpdate.setEmp_street(updatedStreet);
                                }

                                System.out.print("Enter Area (Press Enter to skip): ");
                                String updatedArea = scanner.nextLine();
                                if (!updatedArea.isEmpty()) {
                                    empAddressToUpdate.setEmp_area(updatedArea);
                                }

                                System.out.print("Enter District (Press Enter to skip): ");
                                String updatedDistrict = scanner.nextLine();
                                if (!updatedDistrict.isEmpty()) {
                                    empAddressToUpdate.setEmp_district(updatedDistrict);
                                }

                                System.out.print("Enter Pincode (Press Enter to skip): ");
                                String updatedPincode = scanner.nextLine();
                                if (!updatedPincode.isEmpty()) {
                                    empAddressToUpdate.setEmp_pincode(updatedPincode);
                                }

                                System.out.print("Enter State (Press Enter to skip): ");
                                String updatedState = scanner.nextLine();
                                if (!updatedState.isEmpty()) {
                                    empAddressToUpdate.setEmp_state(updatedState);
                                }

                                // Perform the update in the database
                                empAddressDAO6.updateEmpAddress(empAddressToUpdate);
                                System.out.println("Employee address updated successfully!");
                            } else {
                                System.out.println("Employee address not found!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while updating employee address: " + e.getMessage());
                        }
                        break;

                    		
                    case 10:
                    	// Delete Employee Address
                    	System.out.print("Enter Employee ID: ");
                    	int empIdForAddressDelete = scanner.nextInt();
                    	scanner.nextLine(); // Consume the newline character
                    	EmpAddressDAO empAddressDAO3 = new EmpAddressDAO();
                    	List<EmpAddress> empAddressesToDelete = empAddressDAO3.getEmpAddressesByEmpId(empIdForAddressDelete);
                    	if (!empAddressesToDelete.isEmpty()) {
                    	    // Assuming you want to delete the first address if there are multiple addresses for the employee
                    	    EmpAddress empAddressToDelete = empAddressesToDelete.get(0);

                    	    empAddressDAO3.deleteAddressByEmpId(empIdForAddressDelete);
                    	    System.out.println("Employee address deleted successfully!");
                    	} else {
                    	    System.out.println("Employee address not found!");
                    	}
                    	break;
                    	
                    	

                    case 11:
                        // Add Employee Contact
                        EmpContact empContact = new EmpContact();
                        System.out.print("Enter Employee ID: ");
                        int empIdForContact = scanner.nextInt();
                        scanner.nextLine(); // Consume the newline character
                        Employee empForContact = employeeDAO.getEmployeeById(empIdForContact);
                        if (empForContact != null) {
                            empContact.setEmp_id(empIdForContact);
                            System.out.print("Enter Contact Number: ");
                            empContact.setEmp_contactno(scanner.nextLine());
                            
                            empContactDAO.addEmpContact(empContact);
                            System.out.println("Employee contact added successfully!");
                        } else {
                            System.out.println("Employee not found!");
                        }
                        break;
                        
                        
                    	
                    case 12:
                        // Get Employee Contacts by Employee ID
                        System.out.print("Enter Employee ID: ");
                        int empIdForContacts = scanner.nextInt();

                        // Create an instance of the EmpContactDAO class
                        EmpContactDAO empContactDAO = new EmpContactDAO();

                        try {
                            // Get the list of employee contacts for the given Employee ID
                            List<EmpContact> empContacts = empContactDAO.getEmpContactsByEmpId(empIdForContacts);

                            if (!empContacts.isEmpty()) {
                                System.out.println("Employee Contacts:");
                                for (EmpContact empContact1 : empContacts) {
                                    System.out.println(empContact1);
                                }
                            } else {
                                System.out.println("No contacts found for the employee!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching employee contacts: " + e.getMessage());
                        }
                        break;
                        
                    case 13: // Get all empcontact details
                        try {
                        	EmpContactDAO empContactDAO5 = new EmpContactDAO();
                            List<EmpContact> allEmpContacts = empContactDAO5.getAllEmpContacts();
                            if (!allEmpContacts.isEmpty()) {
                                System.out.println("All EmpContacts:");
                                for (EmpContact empContact5 : allEmpContacts) {
                                    System.out.println("Employee ID: " + empContact5.getEmp_id());
                                    System.out.println("Contact No: " + empContact5.getEmp_contactno());
                                    System.out.println("-----------------------");
                                }
                            } else {
                                System.out.println("No empcontact records found!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching empcontact details: " + e.getMessage());
                        }
                        break;
                        
                        
                    case 14:
                    	
                    	 
                    	        System.out.print("Enter Employee ID: ");
                    	        int empIdForContactUpdate = scanner.nextInt();
                    	        scanner.nextLine(); // Consume the newline character

                    	        EmpContactDAO empContactDAO2 = new EmpContactDAO();
                    	        List<EmpContact> empContactsToUpdate;
                    	        try {
                    	            empContactsToUpdate = empContactDAO2.getEmpContactsByEmpId(empIdForContactUpdate);

                    	            if (!empContactsToUpdate.isEmpty()) {
                    	                // Assuming you want to update the first contact if there are multiple contacts for the employee
                    	                EmpContact empContactToUpdate = empContactsToUpdate.get(0);

                    	                System.out.println("Current Contact Details:");
                    	                System.out.println("Contact Number: " + empContactToUpdate.getEmp_contactno());

                    	                System.out.print("Enter Contact Number (Press Enter to skip): ");
                    	                String updatedContactNo = scanner.nextLine();

                    	                if (!updatedContactNo.isEmpty()) {
                    	                    // Check if the new contact number already exists for another employee
                    	                    boolean isContactNumberExistsForOtherEmployee = empContactDAO2.isContactNumber(updatedContactNo, empIdForContactUpdate);

                    	                    if (isContactNumberExistsForOtherEmployee) {
                    	                        System.out.println("Contact number already exists for another employee. Please enter a different contact number.");
                    	                    } else {
                    	                        empContactToUpdate.setEmp_contactno(updatedContactNo);
                    	                        empContactDAO2.updateEmpContact(empContactToUpdate);
                    	                        System.out.println("Employee contact updated successfully!");
                    	                    }
                    	                } else {
                    	                    System.out.println("No changes made to the contact number.");
                    	                }
                    	            } else {
                    	                System.out.println("Employee contact not found!");
                    	            }
                    	        } catch (SQLException e) {
                    	            System.out.println("Error while updating employee contact: " + e.getMessage());
                    	        }
                    	    

                       break;

                    case 15:
                    	// Delete Employee Contact
                    	System.out.print("Enter Employee ID: ");
                    	int empIdForContactDelete = scanner.nextInt();
                    	scanner.nextLine(); // Consume the newline character
                    	EmpContactDAO empContactDAO3 = new EmpContactDAO();
                    	List<EmpContact> empContactsToDelete = empContactDAO3.getEmpContactsByEmpId(empIdForContactDelete);
                    	if (!empContactsToDelete.isEmpty()) {
                    	    // Assuming you want to delete the first contact if there are multiple contacts for the employee
                    	    EmpContact empContactToDelete = empContactsToDelete.get(0);

                    	    empContactDAO3.deleteContactByEmpId(empIdForContactDelete);
                    	    System.out.println("Employee contact deleted successfully!");
                    	} else {
                    	    System.out.println("Employee contact not found!");
                    	}
                    	break;

                    	
                    case 16:
                        // Add Dependent for Employee
                        Dependents dependent = new Dependents();
                        System.out.print("Enter Employee ID: ");
                        int empIdForDependent = scanner.nextInt();
                        scanner.nextLine(); // Consume the newline character
                        Employee empForDependent = employeeDAO.getEmployeeById(empIdForDependent);
                        if (empForDependent != null) {
                            dependent.setEmp_id(empIdForDependent);
                            System.out.print("Enter Dependent Name: ");
                            dependent.setDep_name(scanner.nextLine());
                            System.out.print("Enter Relationship: ");
                            dependent.setDep_relationship(scanner.nextLine());
                            System.out.print("Enter Dependent Date of Birth (YYYY-MM-DD): ");
                            dependent.setDep_dob(java.sql.Date.valueOf(scanner.nextLine()));
                            System.out.print("Enter Dependent Contact Number: ");
                            dependent.setDep_contactno(scanner.nextLine());
                            
                            dependentsDAO.addDependent(dependent);
                            System.out.println("Dependent added successfully!");
                        } else {
                            System.out.println("Employee not found!");
                        }
                        break;
                        
                    case 17:
                        // Get Dependents Details
                        System.out.print("Enter Employee ID: ");
                        int empIdForDependents = scanner.nextInt();
                        scanner.nextLine(); // Consume the newline character

                        // Create an instance of the DependentsDAO class
                        DependentsDAO dependentsDAO = new DependentsDAO();

                        try {
                            // Get the list of dependents for the given Employee ID
                            List<Dependents> dependentsList = dependentsDAO.getDependentsByEmpId(empIdForDependents);

                            if (!dependentsList.isEmpty()) {
                                System.out.println("Dependents Details for Employee ID " + empIdForDependents + ":");
                                for (Dependents dependent1 : dependentsList) {
                                    System.out.println("Dependent Name: " + dependent1.getDep_name());
                                    System.out.println("Relationship: " + dependent1.getDep_relationship());
                                    System.out.println("Date of Birth: " + dependent1.getDep_dob());
                                    System.out.println("Contact Number: " + dependent1.getDep_contactno());
                                    System.out.println("---------------------");
                                }
                            } else {
                                System.out.println("No dependents found for the employee!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching dependent details: " + e.getMessage());
                        }
                        break;
                        
                    case 18: // Get all dependent details
                    	DependentsDAO dependentsDAO5 = new DependentsDAO();
                        try {
                            List<Dependents> allDependents = dependentsDAO5.getAllDependents();
                            if (!allDependents.isEmpty()) {
                                System.out.println("All Dependents Details:");
                                for (Dependents dependent5 : allDependents) {
                                    System.out.println("Employee ID: " + dependent5.getEmp_id());
                                    System.out.println("Dependent Name: " + dependent5.getDep_name());
                                    System.out.println("Relationship: " + dependent5.getDep_relationship());
                                    System.out.println("Date of Birth: " + dependent5.getDep_dob());
                                    System.out.println("Contact No: " + dependent5.getDep_contactno());
                                    System.out.println("-----------------------");
                                }
                            } else {
                                System.out.println("No dependent records found!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching dependent details: " + e.getMessage());
                        }
                        break;
                        
                    case 19:
                    	// Update Dependent Details
                    	System.out.print("Enter Employee ID: ");
                    	int empIdForDependentUpdate = scanner.nextInt();
                    	scanner.nextLine(); // Consume the newline character

                    	// Create an instance of the DependentsDAO to perform database operations
                    	DependentsDAO dependentsDAO6 = new DependentsDAO();

                    	try {
                    	    // Get the list of dependents for the given Employee ID
                    	    List<Dependents> dependentsToUpdate = dependentsDAO6.getDependentsByEmpId(empIdForDependentUpdate);

                    	    if (!dependentsToUpdate.isEmpty()) {
                    	        for (Dependents dependentToUpdate : dependentsToUpdate) {
                    	            System.out.println("Updating details for Dependent: " + dependentToUpdate.getDep_name());
                    	            
                    	            System.out.print("Enter Relationship (Press Enter to skip): ");
                    	            String updatedRelationship = scanner.nextLine();
                    	            if (!updatedRelationship.isEmpty()) {
                    	                dependentToUpdate.setDep_relationship(updatedRelationship);
                    	            }

                    	            System.out.print("Enter Dependent Date of Birth (YYYY-MM-DD) (Press Enter to skip): ");
                    	            String updatedDob = scanner.nextLine();
                    	            if (!updatedDob.isEmpty()) {
                    	                dependentToUpdate.setDep_dob(java.sql.Date.valueOf(updatedDob));
                    	            }

                    	            System.out.print("Enter Dependent Contact Number (Press Enter to skip): ");
                    	            String updatedContactNo = scanner.nextLine();
                    	            if (!updatedContactNo.isEmpty()) {
                    	                dependentToUpdate.setDep_contactno(updatedContactNo);
                    	            }

                    	            // Perform the update in the database
                    	            dependentsDAO6.updateDependent(dependentToUpdate);
                    	            System.out.println("Dependent details updated successfully!");
                    	        }
                    	    } else {
                    	        System.out.println("No dependents found for the employee!");
                    	    }
                    	} catch (SQLException e) {
                    	    System.out.println("Error while updating dependent details: " + e.getMessage());
                    	}
                    break;


                    case 20:
                    	// Delete Dependent
                    	System.out.print("Enter Employee ID: ");
                    	int empIdForDependentDelete = scanner.nextInt();
                    	scanner.nextLine(); // Consume the newline character
                    	  DependentsDAO dependentsDAO3 = new DependentsDAO();
                    	System.out.print("Enter Dependent Name: ");
                    	String dependentNameToDelete = scanner.nextLine();
                    	// Call deleteDependentsByEmpId instead of deleteDependent
                    	dependentsDAO3.deleteDependentsByEmpId(empIdForDependentDelete);
                    	System.out.println("Dependent deleted successfully!");
                    	break;

                    case 21:
                        // Add Department
                        Department department = new Department();
                        System.out.print("Enter Department ID: ");
                        department.setDept_id(scanner.nextInt());
                        scanner.nextLine(); // Consume the newline character
                        System.out.print("Enter Department Name: ");
                        department.setDept_name(scanner.nextLine());
                        
                        departmentDAO.addDepartment(department);
                        System.out.println("Department added successfully!");
                        break;
                        
                        
                    case 22:
                    	
                    	// Get department details by department ID
                    	System.out.print("Enter Department ID: ");
                    	int deptIdForDetails = scanner.nextInt();
                    	
                    	try {
                    		DepartmentDAO departmentDAO1 = new DepartmentDAO();
                    		Department department1 = departmentDAO1.getDepartmentById(deptIdForDetails);
                    		if (department1 != null) {
                    			System.out.println("Department Details:");
                    			System.out.println("Department ID: " + department1.getDept_id());
                    			System.out.println("Department Name: " + department1.getDept_name());
                    		} else {
                    			System.out.println("Department not found!");
                    		}
                    	} catch (SQLException e) {
                    		System.out.println("Error while fetching department details: " + e.getMessage());
                    	}
                    	break;
                    	
                    	
                    case 23:

                        // Get all department details
                        DepartmentDAO departmentDAO = new DepartmentDAO();

                        try {
                            List<Department> allDepartments = departmentDAO.getAllDepartments();
                            if (!allDepartments.isEmpty()) {
                                System.out.println("All Department Details:");
                                for (Department department1 : allDepartments) {
                                    System.out.println("Department ID: " + department1.getDept_id());
                                    System.out.println("Department Name: " + department1.getDept_name());
                                    System.out.println("---------------------");
                                }
                            } else {
                                System.out.println("No departments found!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching department details: " + e.getMessage());
                        }
                        break;
                        
                        

                        
                        
                        
                    case 24:
                    	// Update Department Details
                    	System.out.print("Enter Department ID: ");
                    	int deptIdToUpdate = scanner.nextInt();
                    	scanner.nextLine(); // Consume the newline character

                    	// Create an instance of the DepartmentDAO to perform database operations
                    	DepartmentDAO departmentDAO3 = new DepartmentDAO();

                    	try {
                    	    // Get the department with the provided department ID
                    	    Department departmentToUpdate = departmentDAO3.getDepartmentById(deptIdToUpdate);

                    	    if (departmentToUpdate != null) {
                    	        // Display the current department details
                    	        System.out.println("Current Department Details for Department ID " + deptIdToUpdate + ":");
                    	        System.out.println("Department ID: " + departmentToUpdate.getDept_id());
                    	        System.out.println("Department Name: " + departmentToUpdate.getDept_name());

                    	        // Prompt for the updated department name
                    	        System.out.print("Enter Department Name (Press Enter to skip): ");
                    	        String updatedDeptName = scanner.nextLine();
                    	        if (!updatedDeptName.isEmpty()) {
                    	            departmentToUpdate.setDept_name(updatedDeptName);
                    	        }

                    	        // Perform the update in the database
                    	        departmentDAO3.updateDepartment(departmentToUpdate);
                    	        System.out.println("Department details updated successfully!");
                    	    } else {
                    	        System.out.println("Department not found!");
                    	    }
                    	} catch (SQLException e) {
                    	    System.out.println("Error while updating department details: " + e.getMessage());
                    	}

                       break;
                        
                        
                        
                    case 25:
                        // Delete Department
                        System.out.print("Enter Department ID: ");
                        int deptIdToDelete = scanner.nextInt();
                        DepartmentDAO departmentDAO4 = new DepartmentDAO();
                        Department deptToDelete = departmentDAO4.getDepartmentById(deptIdToDelete);
                        if (deptToDelete != null) {
                            departmentDAO4.deleteEmployeeFromDepartment(deptIdToDelete);
                            empDeptDAO.deleteEmployeeFromDepartment(deptIdToDelete);
                            System.out.println("Department deleted successfully!");
                        } else {
                            System.out.println("Department not found!");
                        }
                        break;
                        
                        
                    case 26:
                        // Add Employee to Department
                        EmpDept empDept = new EmpDept();
                        System.out.print("Enter Employee ID: ");
                        int empIdForDept = scanner.nextInt();
                        System.out.print("Enter Department ID: ");
                        int deptIdForEmp = scanner.nextInt();
                        empDept.setEmp_id(empIdForDept);
                        empDept.setDept_id(deptIdForEmp);
                        
                        empDeptDAO.addEmpDept(empDept);
                        System.out.println("Employee added to the department successfully!");
                        break;
                        
                        
                    case 27: // Get employee-department relationship details by employee ID
                    	System.out.print("Enter Employee ID: ");
                    	int empIdForDetails = scanner.nextInt();
                    	EmpDeptDAO empDeptDAO5 = new EmpDeptDAO();
                    	
                    	try {
                    		EmpDept empDept5 = empDeptDAO5.getEmpDeptByEmpId(empIdForDetails);
                    		if (empDept5 != null) {
                    			System.out.println("Employee-Department Relationship Details:");
                    			System.out.println("Employee ID: " + empDept5.getEmp_id());
                    			System.out.println("Department ID: " + empDept5.getDept_id());
                    		} else {
                    			System.out.println("Employee-Department relationship not found!");
                    		}
                    	} catch (SQLException e) {
                    		System.out.println("Error while fetching employee-department relationship details: " + e.getMessage());
                    	}
                    	break;
                    	
                    	
                    case 28:
                         //Get All EmployeeDeparment
                        EmpDeptDAO empDeptDAO = new EmpDeptDAO();

                        try {
                            List<EmpDept> allEmpDepts = empDeptDAO.getAllEmpDepts();
                            if (!allEmpDepts.isEmpty()) {
                                System.out.println("All Employee-Department Relationships:");
                                for (EmpDept empDept1 : allEmpDepts) {
                                    System.out.println("Employee ID: " + empDept1.getEmp_id());
                                    System.out.println("Department ID: " + empDept1.getDept_id());
                                    System.out.println("---------------------");
                                }
                            } else {
                                System.out.println("No employee-department relationships found!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching employee-department relationships: " + e.getMessage());
                        }
                        break;
                        
                        
                        
                    case 29:
                    	// Update Employee's Department
                    	System.out.print("Enter Employee ID: ");
                    	int empIdForDeptUpdate = scanner.nextInt();
                    	scanner.nextLine(); // Consume the newline character

                    	EmpDeptDAO empDeptDAO2 = new EmpDeptDAO();

                    	try {
                    	    // Get the current department details for the employee
                    	    EmpDept empDeptToUpdate = empDeptDAO2.getEmpDeptByEmpId(empIdForDeptUpdate);

                    	    if (empDeptToUpdate != null) {
                    	        // Display the current department details
                    	        System.out.println("Current Department Details for Employee ID " + empIdForDeptUpdate + ":");
                    	        System.out.println("Employee ID: " + empDeptToUpdate.getEmp_id());
                    	        System.out.println("Department ID: " + empDeptToUpdate.getDept_id());

                    	        // Prompt for the updated department ID
                    	        System.out.print("Enter Department ID (Press Enter to skip): ");
                    	        int updatedDeptId = scanner.nextInt();

                    	        // Perform the update in the database
                    	        empDeptDAO2.updateEmpDept(empIdForDeptUpdate, updatedDeptId);
                    	        System.out.println("Employee's department updated successfully!");
                    	    } else {
                    	        System.out.println("Employee not found or department not assigned!");
                    	    }
                    	} catch (SQLException e) {
                    	    System.out.println("Error while updating employee's department: " + e.getMessage());
                    	}
                    	break;


                    case 30:
                        // Delete Employee's Department
                        System.out.print("Enter Employee ID: ");
                        int empIdForDeptDelete = scanner.nextInt();
                        EmpDeptDAO empDeptDAO3 = new EmpDeptDAO();
                        empDeptDAO3.deleteEmployeeFromDepartment(empIdForDeptDelete);
                        System.out.println("Employee's department deleted successfully!");
                        break;
                        
                        
//                    case 31:
//                        // Display Employee Details with Salary
//                        try {
//                            List<Employee> allEmployeesWithSalary = employeeDAO.getAllEmployees();
//                            if (!allEmployeesWithSalary.isEmpty()) {
//                                System.out.println("All Employees (with Salary):");
//                                for (Employee employee7 : allEmployeesWithSalary) {
//                                    employee7.displayEmployeeInfo(true);
//                                    System.out.println("-----------------------");
//                                }
//                            } else {
//                                System.out.println("No employees found!");
//                            }
//                        } catch (SQLException e) {
//                            System.out.println("Error while fetching employee details: " + e.getMessage());
//                        }
//                        break;
//                        
//                        
//                        
//                        
//                    case 32:
//                        // Display Employee Details without Salary
//                        try {
//                            List<Employee> allEmployeesWithoutSalary = employeeDAO.getAllEmployees();
//                            if (!allEmployeesWithoutSalary.isEmpty()) {
//                                System.out.println("All Employees (without Salary):");
//                                for (Employee employee8 : allEmployeesWithoutSalary) {
//                                    employee8.displayEmployeeInfo(false);
//                                    System.out.println("-----------------------");
//                                }
//                            } else {
//                                System.out.println("No employees found!");
//                            }
//                        } catch (SQLException e) {
//                            System.out.println("Error while fetching employee details: " + e.getMessage());
//                        }
//                        break;
                        
                    case 31: // Get all the Employee details
                        try {
                            List<Employee> allEmployees = employeeDAO.getAllEmployees();
                            if (!allEmployees.isEmpty()) {
                                System.out.println("All Employees:");
                                for (Employee employee9 : allEmployees) {
                                    System.out.println("-----------------------");
                                    System.out.println("Employee ID: " + employee9.getEmp_id());
                                    // Call the method to display all employee information, including the salary
                                    employee9.displayEmployeeInfo();
                                }
                            } else {
                                System.out.println("No employees found!");
                            }
                        } catch (SQLException e) {
                            System.out.println("Error while fetching employee details: " + e.getMessage());
                        }
                        break;
                        






                        
                    case 0:
                        // Exit
                        System.out.println("Exiting HR Management System...");
                        connection.close();
                        return;
                    default:
                        System.out.println("Invalid choice! Please try again.");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static boolean isContactNumber(String updatedContactNo, int empIdForContactUpdate) {
		// TODO Auto-generated method stub
		return false;
	}

	private static void displayMenu() {
		System.out.println("█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█");
        System.out.println("█    HR Management System Menu      █");
        System.out.println("█                                   █");
        System.out.println("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n");
      
        
        
         System.out.println("          Employee Table       \n   ");
        System.out.println("1. Add Employee");
        System.out.println("2. Get Employee Details By Id");
        System.out.println("3. Get All Employee Details");
        System.out.println("4. Update Employee Details");
        System.out.println("5. Delete Employee\n");
        System.out.println("█═══════════════════════════════════█");
        
        System.out.println("          Address Table      \n    ");
        
        
        System.out.println("6. Add Employee Address");
        System.out.println("7. Get Employee Address By Id");
        System.out.println("8. Get All Empaddress Details");
        System.out.println("9. Update Employee Address");
        System.out.println("10. Delete Employee Address\n");
        
        System.out.println("█═══════════════════════════════════█");
        System.out.println("         Contact Table   \n       ");
        
        
        
        System.out.println("11. Add Employee Contact");
        System.out.println("12. Get Employee_Contact Details By Id");
        System.out.println("13. Get All Empcontact Details");
        System.out.println("14. Update Employee Contact");
        System.out.println("15. Delete Employee Contact\n");
        
        
        System.out.println("█═══════════════════════════════════█");        System.out.println("         Dependent Table          ");
        
        
        System.out.println("\n16. Add Dependent for Employee");
        System.out.println("17. Get Dependents Details By Id");
        System.out.println("18. Get All Dependents Details");
        System.out.println("19. Update Dependent Details");
        System.out.println("20. Delete Dependent\n");
        
        
        System.out.println("█═══════════════════════════════════█");
        System.out.println("         Department Table      \n    ");
        
        
        
        System.out.println("21. Add Department");
        System.out.println("22. Get Department Details By Id");
        System.out.println("23. Get All Department Details");
        System.out.println("24. Update Department Details");
        System.out.println("25. Delete Department\n");
        
        System.out.println("█═══════════════════════════════════█");
        System.out.println("         EmployeeDep Table     \n     ");
        
        
        System.out.println("26. Add Employee to Department");
        System.out.println("27. Get Empdepartment Details By Id");
        System.out.println("28. Get All Empdepartment Details");
        System.out.println("29. Update Employee's Department");
        System.out.println("30. Delete Employee's Department\n");
        
        System.out.println("31.Display Employee Details with Salary \n");
        System.out.println("█═══════════════════════════════════█");        
        System.out.println("█ 0.           Exit                 █");

        System.out.println("█═══════════════════════════════════█");
    }

}