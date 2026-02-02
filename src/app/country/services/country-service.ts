import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.inteface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../Mapper/country.mapper';
import { Country } from '../interfaces/country.interface';


const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital( query: string):Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map( restCountries => CountryMapper.mapRestCountriesToCountries(restCountries)),
      catchError(error => {
        console.log('Error en la búsqueda', error);
        return throwError(()=>new Error ('no se encontró nada en la búsqueda'))
      })

    )
  }
}
