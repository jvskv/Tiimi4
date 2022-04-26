package Tiimi4.Ohjelmistoprojekti1.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import Tiimi4.Ohjelmistoprojekti1.domain.Quiz;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizRepository;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizTwo;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizTwoRepository;


@Controller
public class RestController {
	
	@Autowired
	private QuizRepository q1repo;
	
	@Autowired
	private QuizTwoRepository q2repo;
	
	// RESTful service to get quiz1 results
	@RequestMapping(value = "/vastaus1", method = RequestMethod.GET)
	public @ResponseBody List<Quiz> quizListRest() {
		return (List<Quiz>) q1repo.findAll();
	}
	
	// RESTful service to get quiz2 results
	@RequestMapping(value = "/vastaus2", method = RequestMethod.GET)
	public @ResponseBody List<QuizTwo> quiz2ListRest() {
			return (List<QuizTwo>) q2repo.findAll();
		}

	// RESTful service to get game by id
	@RequestMapping(value = "/v1/{id}", method = RequestMethod.GET)
	public @ResponseBody Optional<Quiz> findQuizRest(@PathVariable("id") Long quizId) {
		return q1repo.findById(quizId);
	}

	// RESTful service to get game by id
	@RequestMapping(value = "/v2/{id}", method = RequestMethod.GET)
	public @ResponseBody Optional<QuizTwo> findQuizRest2(@PathVariable("id") Long quiz2Id) {
			return q2repo.findById(quiz2Id);
		}
	
	@RequestMapping(value = "/tallenna", method = RequestMethod.POST)
	public String save(Quiz quiz) {
		q1repo.save(quiz);
		return "redirect:vastaus1" ;
		
	}
	@RequestMapping(value = "/tallenna2", method = RequestMethod.POST)
	public String save(QuizTwo quiztwo) {
		q2repo.save(quiztwo);
		return "redirect:vastaus2" ;
	}
}
