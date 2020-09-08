import { Pipe, PipeTransform } from '@angular/core';
import { CountryType } from '../resources/types/country.type';

@Pipe({
  name: 'filterCountries'
})
export class FilterCountriesPipe implements PipeTransform {
  transform(products: CountryType[], arg: string): CountryType[] {
    const search = arg.toLowerCase();
    if (products) {
      return products.filter(product =>
        product.name.toLowerCase().includes(search)
      );
    }
  }
}
