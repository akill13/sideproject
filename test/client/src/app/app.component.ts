import { Component, OnInit } from '@angular/core';
import { CarService } from './shared/car/car.service';
import { Car } from './shared/car/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private carService: CarService) {}
  ngOnInit() {
    this.carService.getAllCars().subscribe(resp => this.cars=resp);
  }
  cars: Car[];
  title = 'client';
}
