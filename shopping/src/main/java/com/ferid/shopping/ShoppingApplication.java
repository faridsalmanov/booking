package com.ferid.shopping;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import az.developia.shop.util.upload.storage.StorageProperties;
import az.developia.shop.util.upload.storage.StorageService;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class ShoppingApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingApplication.class, args);
	}
@Bean
CommandLineRunner init(StorageService storageService) {
	return (args) -> {
		storageService.init();
	};
}
}
