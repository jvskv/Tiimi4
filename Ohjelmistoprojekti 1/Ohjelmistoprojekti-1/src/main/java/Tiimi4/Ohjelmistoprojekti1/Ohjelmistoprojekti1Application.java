package Tiimi4.Ohjelmistoprojekti1;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import Tiimi4.Ohjelmistoprojekti1.domain.Quiz;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizRepository;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizTwo;
import Tiimi4.Ohjelmistoprojekti1.domain.QuizTwoRepository;
import Tiimi4.Ohjelmistoprojekti1.domain.User;
import Tiimi4.Ohjelmistoprojekti1.domain.UserRepository;



@SpringBootApplication
public class Ohjelmistoprojekti1Application {

	public static void main(String[] args) {
		SpringApplication.run(Ohjelmistoprojekti1Application.class, args);
	}
		
		@Bean
		public CommandLineRunner gameDemo(QuizRepository q1repo, QuizTwoRepository q2repo, UserRepository urepository) {
			return (args) -> {
				
				Quiz quiz1 = new Quiz("1", "Metallica", "Fade to black", "Avatar", "Spagetti", "Jalkapallo");
					q1repo.save(quiz1);
				Quiz quiz2 = new Quiz("2", "Metallica", "Master of puppets", "Hunger Games", "Kalakeitto", "Lätkä");
					q1repo.save(quiz2);
				
				QuizTwo quiz3 = new QuizTwo("VSCode", "Python");
					q2repo.save(quiz3);

				User user1 = new User(0, "admin", "$2a$10$0MMwY.IQqpsVc1jC8u7IJ.2rT8b0Cd3b3sfIBGV2zfgnPGtT4r0.C", "ADMIN");
				User user2 = new User(1, "user", "$2a$06$3jYRJrg0ghaaypjZ/.g4SethoeA51ph3UD4kZi9oPkeMTpjKU5uo6", "USER");
				urepository.save(user1);
				urepository.save(user2);
		};
	}
}