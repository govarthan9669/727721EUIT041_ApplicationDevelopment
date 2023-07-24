//package com.example.employeedetails3lab.controller;
//
// 
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.employeedetails3lab.controller.service.FeedbackService;
//import com.example.employeedetails3lab.model.Feedback;
//
//@CrossOrigin(origins="*")
//@RestController
//public class FeedbackController {
//    private final FeedbackService feedbackService;
//
//    @Autowired
//    public FeedbackController(FeedbackService feedbackService) {
//        this.feedbackService = feedbackService;
//    }
//
//    @PostMapping("/api/feedback")
//    public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback feedback) {
//        Feedback savedFeedback = feedbackService.saveFeedback(feedback);
//        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
//    }
//}
