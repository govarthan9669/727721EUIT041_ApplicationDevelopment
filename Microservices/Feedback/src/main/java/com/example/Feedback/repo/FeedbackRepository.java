package com.example.Feedback.repo;






import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Feedback.Mode.Feedback;



public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
