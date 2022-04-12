package Tiimi4.Ohjelmistoprojekti1;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import Tiimi4.Ohjelmistoprojekti1.domain.User;
import Tiimi4.Ohjelmistoprojekti1.domain.UserRepository;



@SpringBootApplication
public class Ohjelmistoprojekti1Application {

	public static void main(String[] args) {
		SpringApplication.run(Ohjelmistoprojekti1Application.class, args);
	}
		
		@Bean
		public CommandLineRunner gameDemo(UserRepository urepository) {
			return (args) -> {

				User user1 = new User(0, "admin", "$2a$10$0MMwY.IQqpsVc1jC8u7IJ.2rT8b0Cd3b3sfIBGV2zfgnPGtT4r0.C", "ADMIN");
				User user2 = new User(1, "user", "$2a$06$3jYRJrg0ghaaypjZ/.g4SethoeA51ph3UD4kZi9oPkeMTpjKU5uo6", "USER");
				urepository.save(user1);
				urepository.save(user2);
		};
	}
}