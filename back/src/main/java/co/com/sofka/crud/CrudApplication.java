package co.com.sofka.crud;

import co.com.sofka.crud.dto.SingleModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudApplication.class, args);
    }

    @Bean
    public SingleModelMapper singleModelMapper() {
        return new SingleModelMapper();
    }
}
