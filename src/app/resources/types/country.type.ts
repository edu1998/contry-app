import { Languages } from './languages';

export type CountryType = {
  alpha3Code: string;
  name: string;
  region: string;
  population: number;
  capital: string;
  flag: string;
  languages: Languages[];
  borders: string[];
  bordersLeyend: string[];
  currencies: { name: string }[];
  favorite?: boolean;
};
