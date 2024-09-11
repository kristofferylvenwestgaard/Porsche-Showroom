import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cars } from '../cars';
import { RouterLink, RouterLinkActive } from '@angular/router';

//Car card component for showing each car and it's attributes
@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="car-card">
      <div class="car-card-top">
        <img class="car-img" [src]="cars.image" alt="Photo of {{cars.name}}" />
      </div>
      <div class="car-card-bottom">
        <h2 class="listing-location">{{ cars.name }}</h2>
        <p class="label">ENGINE: {{ cars.fuel }}</p>
        <p class="label">0-100KM/H: {{ cars.accelleration }}S</p>
        <p class="label">REACH WLTP: {{ cars.reach }}KM</p>
        <p class="label">TOP SPEED: {{ cars.topSpeed }}KM/H</p>
        <a routerLink="/show-car-component" routerLinkActive="active" ariaCurrentWhenActive="page">View car</a>
      </div>
    </div>
  `,
  styleUrl: './car.component.scss'
})
export class CarComponent {
  //makes the component able to take input / props
  @Input() cars!: Cars;
}
