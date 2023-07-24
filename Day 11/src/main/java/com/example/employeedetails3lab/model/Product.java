package com.example.employeedetails3lab.model;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="products")
@Entity
public class Product {
    @Id
    int Id;
    String Name;
    String Quantity;
    String Category;
    float Price;
    String Expirydate;
  
   

	public Product(int id, String name, String quantity, String category, float price, String expirydate) {
		super();
		Id = id;
		Name = name;
		Quantity = quantity;
		Category = category;
		Price = price;
		Expirydate = expirydate;
	}



	public int getId() {
		return Id;
	}



	public void setId(int id) {
		Id = id;
	}



	public String getName() {
		return Name;
	}



	public void setName(String name) {
		Name = name;
	}



	public String getQuantity() {
		return Quantity;
	}



	public void setQuantity(String quantity) {
		Quantity = quantity;
	}



	public String getCategory() {
		return Category;
	}



	public void setCategory(String category) {
		Category = category;
	}



	public float getPrice() {
		return Price;
	}



	public void setPrice(float price) {
		Price = price;
	}



	public String getExpirydate() {
		return Expirydate;
	}



	public void setExpirydate(String expirydate) {
		Expirydate = expirydate;
	}



	public Product(){
        
    }
}
