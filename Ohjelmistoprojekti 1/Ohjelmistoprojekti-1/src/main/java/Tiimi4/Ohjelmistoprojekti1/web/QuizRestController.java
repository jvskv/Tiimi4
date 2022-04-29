package Tiimi4.Ohjelmistoprojekti1.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Tiimi4.Ohjelmistoprojekti1.domain.Quiz;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizRepository;



@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class QuizRestController {
	
		
	  private QuizRepository q1repository;
	  	
	

	  QuizRestController(QuizRepository q1repository) {
	    this.q1repository = q1repository;

	  }

	
	  @GetMapping("/quizes")
	  Iterable<Quiz> all() {
	    return  q1repository.findAll();
	  
	  }
	 

	  @PostMapping("/quizes")
	  Quiz newQuiz(@RequestBody Quiz newQuiz) {
	    return q1repository.save(newQuiz);
	   
	  }


	  @PutMapping("/quizes/{id}")
	  Quiz replaceEmployee(@RequestBody Quiz newQuiz, @PathVariable Long id) {
	    

	        newQuiz.setId(id);
	        return q1repository.save(newQuiz);
	     
	  }

	  @DeleteMapping("/employees/{id}")
	  void deleteEmployee(@PathVariable Long id) {
	    q1repository.deleteById(id);
	  }
	}