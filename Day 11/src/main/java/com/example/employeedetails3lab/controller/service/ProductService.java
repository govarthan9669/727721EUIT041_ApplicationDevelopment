//package com.example.employeedetails3lab.controller.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.employeedetails3lab.controller.repository.ProductRepository;
//import com.example.employeedetails3lab.model.Product;
//
//import java.util.List;
//
//@Service
//public class ProductService {
//    private final ProductRepository productRepository;
//
//    @Autowired
//    public ProductService(ProductRepository productRepository) {
//        this.productRepository = productRepository;
//    }
//
//    // Service method to fetch products by category
//    public List<Product> getProductsByCategory(String category) {
//        return productRepository.findByCategory(category);
//    }
//}
