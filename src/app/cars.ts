//Determine what type the car object received in cars.service.ts should be
export interface Cars {
    id: number,
    name: string,
    fuel: string,
    accelleration: number,
    topSpeed: number,
    reach: number | null,
    image: string,
}
