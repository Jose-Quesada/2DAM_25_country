import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.inteface';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
  styles: ``,
})
export class CountryList {

  countries = input.required<Country[]>();


}
