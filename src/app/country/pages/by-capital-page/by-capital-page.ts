import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country-service';
import { RESTCountry } from '../../interfaces/rest-countries.inteface';
import { CountryMapper } from '../../Mapper/country.mapper';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService)

  query = signal('')


  contryResource = resource({
    params: () => ({query: this.query()}),
    defaultValue: [],
    loader: async({ params}) => {
      if ( !params.query ) return [];
      return await firstValueFrom(this.countryService.searchByCapital(params.query))
    }
  })


  // isLoading = signal(false)
  // isError = signal<string|null>(null)
  // countries = signal<Country[]>([])


  // onSearch( query: string){

  //   if ( this.isLoading() ) return
  //   this.isLoading.set(true)
  //   this.isError.set(null)

  //   this.countryService.searchByCapital(query)
  //   .subscribe({
  //     next: (countries)=>{
  //       this.isLoading.set(false)
  //       this.countries.set(countries)
  //     },
  //     error: (err)=>{
  //       this.isError.set(err)
  //       this.isLoading.set(false)
  //       this.countries.set([])
  //       // this.isError.set(`No se encontró ningún país con la capital ${query}`)
  //     }
  //   })
  // }



 }
