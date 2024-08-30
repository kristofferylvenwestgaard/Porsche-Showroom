import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cars } from '../cars';

//Car card component for showing each car and it's attributes
@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="car-card">
      <div class="car-card-top">
        <img class="car-img" [src]="cars.image" alt="Photo of {{cars.name}}" />
      </div>
      <div class="car-card-bottom">
        <h2 class="listing-location">{{ cars.name }}</h2>
        <p class="label">{{ cars.fuel }}</p>
        <p class="label">{{ cars.accelleration }}</p>
        <p class="label">{{ cars.reach }}</p>
        <p class="label">{{ cars.topSpeed }}</p>
      <div class="car-card-bottom">
    </div>
  `,
  styleUrl: './car.component.scss'
})
export class CarComponent {
  //makes the component able to take input / props
  @Input() cars!: Cars;
}
