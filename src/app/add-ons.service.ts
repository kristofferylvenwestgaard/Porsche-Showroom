import { Injectable } from '@angular/core';
import { AddOns } from './add-ons';

@Injectable({
  providedIn: 'root'
})
export class AddOnsService {
  AddOnsList: AddOns[] = [
    {
      id: 0,
      name: "Flames",
      pimpCharacter: 8,
      price: 299,
    },
    {
      id: 0,
      name: "Bass & Speakers",
      pimpCharacter: 9.99,
      price: 999,
    }
  ] 
  constructor() { }
}
