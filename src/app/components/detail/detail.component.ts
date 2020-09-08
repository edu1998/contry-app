import { Component, Inject, OnInit } from '@angular/core';
import { CountryType } from '../../resources/types/country.type';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public country: CountryType,
    private countryService: CountryService
  ) {}

  addFavorites(country: CountryType) {
    if (!country.favorite) {
      this.countryService.addFavorites(country);
    }
  }

  ngOnInit() {
    console.log(this.country);
  }
}
