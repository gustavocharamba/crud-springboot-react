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
        User user1 = new User(null, "Gustavo", "gustavo@gmail.com", "99999999", "123456789", "Recife");
        User user2 = new User(null, "Eliane", "eliane@gmail.com", "88888888", "123456789", "Fortaleza");
        User user3 = new User(null, "Bruno", "bruno@gmail.com", "77777777", "123456789", "São Paulo");
        User user4 = new User(null, "Saulo", "saulo@gmail.com", "66666666", "123456789", "Recife");
        User user5 = new User(null, "Livia", "livia@gmail.com", "55555555", "123456789", "Rio de Janeiro");
        User user6 = new User(null, "Sindel", "sindel@gmail.com", "44444444", "123456789", "Fortaleza");

        userRepository.saveAll(Arrays.asList(user1, user2, user3, user4, user5, user6));
    }
}