import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  readonly baseUrl = 'https://imgcld.yatra.com/ytimages/image/upload/v1396184548/International%20Holidays/Canada/Vancouver/shutterstock_38020621.jpg'

  housingLocationList: HousingLocation[] = [
    {
      id: 111,
      name: "Adrian",
      city: "Lima",
      state: "Noruega",
      photo: `${this.baseUrl}`,
      availableUnits: 12,
      wifi: true,
      laundry: true
    },
    {
      id: 112,
      name: "Casa Sur",
      city: "Cusco",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 8,
      wifi: true,
      laundry: false
    },
    {
      id: 113,
      name: "Ocean View",
      city: "Trujillo",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 5,
      wifi: false,
      laundry: true
    },
    {
      id: 114,
      name: "Snowy Lodge",
      city: "Huaraz",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 115,
      name: "Jungle Home",
      city: "Iquitos",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 6,
      wifi: false,
      laundry: false
    },
    {
      id: 116,
      name: "Mountain Retreat",
      city: "Arequipa",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 10,
      wifi: true,
      laundry: false
    },
    {
      id: 117,
      name: "Downtown Loft",
      city: "Piura",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 3,
      wifi: false,
      laundry: true
    },
    {
      id: 118,
      name: "Skyline Flat",
      city: "Tacna",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 9,
      wifi: true,
      laundry: true
    },
    {
      id: 119,
      name: "River Cabin",
      city: "Pucallpa",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 120,
      name: "Urban Studio",
      city: "Chiclayo",
      state: "Perú",
      photo: `${this.baseUrl}`,
      availableUnits: 4,
      wifi: true,
      laundry: false
    }
  ];


  // funcion para traer todos los datos HousingLocation: es la interface y luego devolvemos la lista
  // con los datos
  getAllHousingLocation(): HousingLocation[] {
    return this.housingLocationList
  }

  // Encontrar locaciones por id
  getHousingLocationById(id:number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id == id)
  }


}
