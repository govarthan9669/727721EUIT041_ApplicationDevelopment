//package com.example.employeedetails3lab.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.employeedetails3lab.controller.service.ProductService;
//import com.example.employeedetails3lab.model.Product;
//
//import java.util.List;
//
//@CrossOrigin
//
//@RestController
//@RequestMapping("/products")
//public class ProductController {
//    private final ProductService productService;
//
//    @Autowired
//    public ProductController(ProductService productService) {
//        this.productService = productService;
//    }
//
//    // API endpoint to fetch products by category
//    @GetMapping("/{category}")
//    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
//        List<Product> products = productService.getProductsByCategory(category);
//        return new ResponseEntity<>(products, HttpStatus.OK);
//    }
//}
