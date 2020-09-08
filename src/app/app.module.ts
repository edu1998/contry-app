import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@edutor/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstantService } from './services/constant.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterCountriesPipe } from './common/filter-countries.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DetailComponent } from './components/detail/detail.component';
import { LabelDetailComponent } from './components/label-detail/label-detail.component';
import { CountriesRegionPipe } from './common/countries-region.pipe';
import { BorderListPipe } from './common/border-country.pipe';
import { ShortNumberPipe } from './common/short-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterCountriesPipe,
    HeaderComponent,
    DetailComponent,
    LabelDetailComponent,
    CountriesRegionPipe,
    BorderListPipe,
    ShortNumberPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule.forRoot({ baseUrl: ConstantService.baseUrl }),
    FlexLayoutModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  entryComponents: [DetailComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
