package com.example.VendorProduct.Repo;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.VendorProduct.Model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Custom queries or additional methods can be defined here if needed
}
