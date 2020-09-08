import { Injectable } from '@angular/core';
import { HttpServices as Http } from '@edutor/http';
import { Observable } from 'rxjs';
import { CountryType } from '../resources/types/country.type';
import { map, take } from 'rxjs/operators';
import { CountriesStore } from '../store/country.store';
import { ConsumerType } from 'tslint';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: Http, private store: CountriesStore) {}

  public getAll() {
    return (this.http.get() as unknown) as Observable<CountryType[]>;
  }

  public saveCountries() {
    return this.getAll().pipe(
      map(countries => {
        this.store.setRegions(
          CountryService.filterRegionsOfCountries(countries)
        );
        this.store.setCountries(countries);
      })
    );
  }

  private static filterRegionsOfCountries(countries: CountryType[]) {
    const regions = countries
      .map(country => country.region)
      .filter(country => country);
    return [...new Set(regions)];
  }

  public addFavorites(country: CountryType) {
    country.favorite = true;
    this.store.countries$.pipe(take(1)).subscribe(countries => {
      const indexReplace = countries.findIndex(
        con => con.alpha3Code === country.alpha3Code
      );
      countries[indexReplace] = country;
      this.store.setCountries(countries);
    });
  }
}
