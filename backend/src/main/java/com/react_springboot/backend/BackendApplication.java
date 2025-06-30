package com.react_springboot.backend;

import com.react_springboot.backend.model.User;
import com.react_springboot.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("AV", "avinoth234@gmail.com"));
		this.userRepository.save(new User("Ab", "Ab1234@new.mail.com"));
		this.userRepository.save(new User("Test User", "test@gmail.com"));
		this.userRepository.save(new User("Rabi", "rabikings85739@gmail.com"));
	}
}
