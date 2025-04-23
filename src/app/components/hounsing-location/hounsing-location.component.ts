import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hounsing-location',
  imports: [RouterModule],
  templateUrl: './hounsing-location.component.html',
  styleUrl: './hounsing-location.component.css'
})
export class HounsingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
