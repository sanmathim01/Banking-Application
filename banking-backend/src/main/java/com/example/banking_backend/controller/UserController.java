
package com.example.banking_backend.controller;

import com.example.banking_backend.model.User;
import com.example.banking_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        System.out.println("coming here");
        return userService.register(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
        try {

            User user = userService.login(email, password);
            return ResponseEntity.ok(user);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occured");
        }
    }

    @PostMapping("/{userId}/deposit")
    public User deposit(@PathVariable Long userId, @RequestParam Double amount) {
        return userService.deposit(userId, amount);
    }

    @PostMapping("/{userId}/withdraw")
    public User withdraw(@PathVariable Long userId, @RequestParam Double amount) {
        return userService.withdraw(userId, amount);
    }
}
