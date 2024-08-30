import { Injectable } from '@angular/core';
import { Cars } from './cars';

@Injectable({
  providedIn: 'root'
})

//Handling and serve data to "cars" component
export class CarsService {
  carsList: Cars[] = [
    {
      id: 0,
      name: "Porsche Macan",
      fuel: "Electric",
      accelleration: 5.7,
      topSpeed: 220,
      reach: 641,
      image: "https://images-porsche.imgix.net/-/media/1A69E178D3A4498F80C03853AD613BB8_D112506727AB490EA0DC4B538A780B35_macan-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format"
    },
    {
      id: 1,
      name: "Porsche Taycan",
      fuel: "Electric",
      accelleration: 4.8,
      topSpeed: 230,
      reach: 821,
      image: "https://images-porsche.imgix.net/-/media/329E707A3234485BBE98485116865780_E8DD4C47C7F14D41B61C1AE76B59FC1A_TA24Q3EIX0010-taycan-turbo-s-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format"
    },
    {
      id: 2,
      name: "Porsche Panamera 4 E",
      fuel: "Hybrid",
      accelleration: 4.1,
      topSpeed: 280,
      reach: 92,
      image: "https://images-porsche.imgix.net/-/media/C7ADC76FD1A84CEAAE7024CF325F2F2D_0C9E9F9782E0447E95F49AE2C21CF324_panamera-4-e-hybrid-model-intro?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format"
    },
    {
      id: 3,
      name: "Porsche Taycan",
      fuel: "Electric",
      accelleration: 4.8,
      topSpeed: 230,
      reach: 821,
      image: "https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-coupe-phev-modelexplorer-sideshot/normal/c7cd2fa5-8859-11ee-810c-005056bbdc38;sO;twebp/porsche-normal.webp"
    },
    {
      id: 4,
      name: "Porsche Taycan",
      fuel: "Electric",
      accelleration: 4.8,
      topSpeed: 230,
      reach: 821,
      image: "https://images-porsche.imgix.net/-/media/261EF9F86B2B4F45AC57EA8D26C3B081_A4BAE2D2A1C74C5E87E3AB8A5B8F5124_TA24Q3BIX0010-taycan-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=formathttps://images-porsche.imgix.net/-/media/261EF9F86B2B4F45AC57EA8D26C3B081_A4BAE2D2A1C74C5E87E3AB8A5B8F5124_TA24Q3BIX0010-taycan-side?w=1200&q=85&crop=faces%2Centropy%2Cedges&auto=format"
    },
  ];

  //return and array of car objects
  getAllCars(): Cars[] {
    return this.carsList;
  }

  // getCarsById(id: number): Cars | undefined {
  //   return this.carsList.find((carsList) => carsList.id === id);
  // }

  constructor() { }
}
