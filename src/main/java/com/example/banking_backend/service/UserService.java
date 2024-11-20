
package com.example.banking_backend.service;

import com.example.banking_backend.model.User;
import com.example.banking_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        return userRepository.save(user);
    }

//    public Optional<User> login(String email, String password) {
//        return userRepository.findByEmail(email)
//                .filter(user -> user.getPassword().equals(password))
//                ;
//    }
public User login(String email, String password) {
    User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

    if (!user.getPassword().equals(password)) {
        throw new IllegalArgumentException("Invalid email or password");
    }

    return user;
}


    public User deposit(Long userId, Double amount) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setBalance(user.getBalance() + amount);
        return userRepository.save(user);
    }

    public User withdraw(Long userId, Double amount) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        if (user.getBalance() < amount) {
            throw new RuntimeException("Insufficient funds");
        }
        user.setBalance(user.getBalance() - amount);
        return userRepository.save(user);
    }
}
