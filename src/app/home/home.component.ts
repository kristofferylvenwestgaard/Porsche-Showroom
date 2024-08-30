import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from '../cars.service';
import { CarComponent } from "../car/car.component";
import { Cars } from '../cars';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carsService: CarsService = inject(CarsService);
  constructor() {
    this.carsList = this.carsService.getAllCars();
  }
  carsList: Cars[] = []; 
}
