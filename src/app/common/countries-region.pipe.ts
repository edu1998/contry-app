import { Pipe, PipeTransform } from '@angular/core';
import { CountryType } from '../resources/types/country.type';

@Pipe({
  name: 'countriesByRegion'
})
export class CountriesRegionPipe implements PipeTransform {
  transform(countries: CountryType[], region: string): CountryType[] {
    return countries
      .filter(country => country.region === region)
      .map(country => {
        const borders = [];
        country.borders.forEach(border => {
          const include = countries.find(coun => coun.alpha3Code === border);
          if (include) borders.push(include.name);
        });
        return { ...country, bordersLeyend: borders };
      });
  }
}
