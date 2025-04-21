import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-hounsing-location',
  imports: [],
  templateUrl: './hounsing-location.component.html',
  styleUrl: './hounsing-location.component.css'
})
export class HounsingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
