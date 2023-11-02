package hoon.capstone.llama;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class LlamaApplication {
	public static void main(String[] args) {
		SpringApplication.run(LlamaApplication.class, args);
	}
}
