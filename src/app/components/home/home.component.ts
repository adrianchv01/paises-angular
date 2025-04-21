import { Component, inject } from '@angular/core';
import { HounsingLocationComponent } from "../hounsing-location/hounsing-location.component";
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HounsingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocation();
  }

}
