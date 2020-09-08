import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryType } from '../resources/types/country.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesStore {
  protected countriesBs = new BehaviorSubject<CountryType[]>([]);
  public countries$ = this.countriesBs.asObservable();

  public regionsBs = new BehaviorSubject<string[]>([]);
  public regions$ = this.regionsBs.asObservable();

  setCountries(countries: CountryType[]) {
    this.countriesBs.next(countries);
  }

  setRegions(regions: string[]) {
    this.regionsBs.next(regions);
  }
}
