import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService)

  housingLocation: HousingLocation | undefined

  formAngular = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    //Con spanapshot capturamos el estado actual de la ruta activa
    //COn params accedemos a los parametros enviados en la url
    const hounsingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(hounsingLocationId);
  }

  onSubmit(){
    this.housingService.getForm(
      this.formAngular.value.firstName ?? '',
      this.formAngular.value.lastName ?? '',
      this.formAngular.value.email ?? ''
    ) 
  }

}
