package com.example.employeedetails3lab.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="SignUp")
public class Employee {
    @Id
   
    private String Name ;
    private String Password;
    private String Email;
    private String Address ;
    private Long ContactNumber;

	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public Long getContactNumber() {
		return ContactNumber;
	}
	public void setContactNumber(Long contactNumber) {
		ContactNumber = contactNumber;
	}
	public Employee(String name, String email, String password, String address, Long contactNumber) {
		super();
		
		Name = name;
		Email = email;
		Password = password;
		Address = address;
		ContactNumber = contactNumber;
	}
   
    public Employee()
    {
    	
    }
  }
