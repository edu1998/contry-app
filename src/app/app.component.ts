import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { CountriesStore } from './store/country.store';
import { CountryType } from './resources/types/country.type';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './components/detail/detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public searchLabel = '';

  constructor(
    private countriesService: CountryService,
    public store: CountriesStore,
    private dialog: MatDialog
  ) {}

  openDetail(country: CountryType) {
    this.dialog.open(DetailComponent, {
      data: country,
      width: '650px'
    });
  }

  ngOnInit() {
    this.countriesService.saveCountries().subscribe();
  }
}
