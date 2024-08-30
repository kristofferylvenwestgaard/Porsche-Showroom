import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { CarComponent } from "./car/car.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, CarComponent],
  template: `
    <main>
      <app-header></app-header>
      <app-home>
      </app-home>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'p1';
}
