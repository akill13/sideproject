package com.abdul.test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/car")
public class CarController {

	@GetMapping("")
	@CrossOrigin(origins = "http://localhost:4200")
	public Car getCar() {
		Car car = new Car();
		car.setName("Abdul");
		return car;
	}
}
