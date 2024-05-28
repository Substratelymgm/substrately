import { callingCountries } from 'country-data';
import { CountryInput } from './types';

 

export const countries: CountryInput[] = callingCountries.all.map((country:any) => {
  return {
    code: country.countryCallingCodes[0],
    name: country.name
  };
}).filter((country: CountryInput) => country.code); 


