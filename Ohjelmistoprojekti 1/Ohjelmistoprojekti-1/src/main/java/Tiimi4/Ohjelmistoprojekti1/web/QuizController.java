package Tiimi4.Ohjelmistoprojekti1.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import Tiimi4.Ohjelmistoprojekti1.domain.NewQuestion;
import Tiimi4.Ohjelmistoprojekti1.domain.NewQuestionRepository;
import Tiimi4.Ohjelmistoprojekti1.domain.NewQuiz;
import Tiimi4.Ohjelmistoprojekti1.domain.NewQuizRepository;
import Tiimi4.Ohjelmistoprojekti1.domain.Quiz;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizRepository;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizTwo;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizTwoRepository;


@Controller
public class QuizController {
	
	@Autowired
	private QuizRepository q1repo;
	
	@Autowired
	private QuizTwoRepository q2repo;
	
	@Autowired
	private NewQuizRepository newqrepo;
	
	@Autowired
	private NewQuestionRepository newquestionrepo;

	@RequestMapping(value = { "/", "/kysely" })
	public String kysely(Model model) {
		model.addAttribute("quizes", q1repo.findAll());
		model.addAttribute("quizes", q2repo.findAll());
		return "kysely";
	}
	
	@RequestMapping(value = "/newquiz")
	public String newQuiz(Model model) {
		model.addAttribute("newquizes", newqrepo.findAll());
		return "newquiz";
	}
	
	@RequestMapping(value = "/quizsave", method = RequestMethod.POST)
	public String save(NewQuiz newquiz) {
		newqrepo.save(newquiz);
		return "redirect:newquiz";
	}
	
	@RequestMapping(value = "/newquestion")
	public String newQuestion(Model model) {
		model.addAttribute("newquestions", newquestionrepo.findAll());
		return "newquestion";
	}
	
	@RequestMapping(value = "/questionsave", method = RequestMethod.POST)
	public String save(NewQuestion newquestion) {
		newquestionrepo.save(newquestion);
		return "redirect:newquiz";
	}
	
	@RequestMapping(value = "/quiz1")
	public String addQuiz(Model model) {
		model.addAttribute("quiz", new Quiz());
		return "quiz1";
	}
	
	@RequestMapping(value = { "/quiz1tulos" })
	public String quiz1List(Model model) {
		model.addAttribute("quizes", q1repo.findAll());
		return "quiz1tulos";
	}
	
	@RequestMapping(value = "/quiz2")
	public String addQuiz2(Model model) {
		model.addAttribute("quiz2", new QuizTwo());
		return "quiz2";
	}
	
	@RequestMapping(value = { "/quiz2tulos" })
	public String quiz2List(Model model) {
		model.addAttribute("quizestwo", q2repo.findAll());
		return "quiz2tulos";
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String save(Quiz quiz) {
		q1repo.save(quiz);
		return "redirect:quiz1tulos";
	}
	
	@RequestMapping(value = "/save2", method = RequestMethod.POST)
	public String save(QuizTwo quiztwo) {
		System.out.println("controller " + quiztwo);
		q2repo.save(quiztwo);
		return "redirect:quiz2tulos";
	}
	
	@RequestMapping(value = "/delete1/{id}", method = RequestMethod.GET)
	public String deleteQuiz1(@PathVariable("id") Long quiz1Id, Model model) {
		q1repo.deleteById(quiz1Id);
		return "redirect:../quiz1tulos";
	}
	
	@RequestMapping(value = "/delete2/{id}", method = RequestMethod.GET)
	public String deleteQuiz2(@PathVariable("id") Long quiz2Id, Model model) {
		q2repo.deleteById(quiz2Id);
		return "redirect:../quiz2tulos";
	}

}
