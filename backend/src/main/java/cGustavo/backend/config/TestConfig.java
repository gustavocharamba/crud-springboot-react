package cGustavo.backend.config;

import cGustavo.backend.entities.User;
import cGustavo.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;


    @Override
    public void run(String... args) throws Exception {
        User user1 = new User(null, "Gustavo", "gustavo@gmail.com", "99999999", "123456789");
        User user2 = new User(null, "Eliane", "eliane@gmail.com", "88888888", "123456789");

        userRepository.saveAll(Arrays.asList(user1, user2));
    }
}