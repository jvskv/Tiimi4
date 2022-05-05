package Tiimi4.Ohjelmistoprojekti1.web;

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
import Tiimi4.Ohjelmistoprojekti1.domain.QuizTwo;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizTwoRepository;



@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class QuizTwoRestController {
	
		
	  private QuizTwoRepository q2repository;
	  	
	

	  QuizTwoRestController(QuizTwoRepository q2repository) {
	    this.q2repository = q2repository;

	  }

	
	  @GetMapping("/quizes2")
	  Iterable<QuizTwo> all() {
	    return  q2repository.findAll();
	  
	  }
	 

	  @PostMapping("/quizes2")
	  Quiz newQuiz(@RequestBody Quiz newQuiz) {
	    return q2repository.save(newQuiz);
	   
	  }


	  @PutMapping("/quizes2/{id}")
	  Quiz replaceQuizTwo(@RequestBody Quiz newQuiz, @PathVariable Long id) {
	    

	        newQuiz.setId(id);
	        return q2repository.save(newQuiz);
	     
	  }

	  @DeleteMapping("/quizes2/{id}")
	  void deleteQuizTwo(@PathVariable Long id) {
	    q2repository.deleteById(id);
	  }
	}