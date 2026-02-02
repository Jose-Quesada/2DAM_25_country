import { Country } from "../interfaces/country.interface"
import { RESTCountry } from "../interfaces/rest-countries.inteface"

export class CountryMapper {
  //static RestCountry => Country
  static mapRestCountryToCountry(restCountry: RESTCountry):Country{
    return {
      capital: restCountry.capital.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'Sin nombre en español',
      population: restCountry.population,
    }
  }
  // static RestCountry[] => Country[]
  static mapRestCountriesToCountries(restCountries: RESTCountry[]):Country[]{
    return restCountries.map(country => this.mapRestCountryToCountry(country))
  }
}
