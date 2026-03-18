import { Component, input } from '@angular/core';
import { Housinglocationinfo } from '../housinglocationinfo';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, RouterModule, RouterOutlet],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<Housinglocationinfo>()
}
