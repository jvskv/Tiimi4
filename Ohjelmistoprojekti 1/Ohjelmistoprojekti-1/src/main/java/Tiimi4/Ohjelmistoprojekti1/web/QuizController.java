package Tiimi4.Ohjelmistoprojekti1.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import Tiimi4.Ohjelmistoprojekti1.domain.Quiz;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizRepository;


@Controller
public class QuizController {
	
	@Autowired
	private QuizRepository q1repo;

	@RequestMapping(value = { "/", "/kysely" })
	public String gameList(Model model) {
		model.addAttribute("quizes", q1repo.findAll());
		return "kysely";
	}
	
	@RequestMapping(value = "/quiz1")
	public String addGame(Model model) {
		model.addAttribute("quiz", new Quiz());
		return "quiz1";
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String save(Quiz quiz) {
		q1repo.save(quiz);
		return "redirect:kysely";
	}

}
