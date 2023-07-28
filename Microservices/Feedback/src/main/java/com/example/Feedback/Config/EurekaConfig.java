//package com.example.Feedback.Config;
//
//import com.example.Feedback.Config.CustomEurekaHttpClientDecorator;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import com.netflix.discovery.shared.transport.EurekaHttpClient;
//
//@Configuration
//public class EurekaConfig {
//
//    @Autowired
//    private EurekaHttpClient eurekaHttpClient;
//
//    @Bean
//    public EurekaHttpClient discoveryClientOptionalArgs() {
//        return new CustomEurekaHttpClientDecorator(eurekaHttpClient);
//    }
//}
