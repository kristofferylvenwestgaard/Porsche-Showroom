import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowCarComponent } from './show-car/show-car.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'show-car-component', component: ShowCarComponent},
];
