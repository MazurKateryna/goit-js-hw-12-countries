import countriesListTpl from '../templates/countriesList.hbs';
import countryAboutTpl from '../templates/aboutCountry.hbs';
import { refs } from './refs';

function countriesMarkup(countries) {
    let markup = null;
    if (countries.length === 1) {
      markup = countryAboutTpl(countries);
      return refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
    } else if (countries.length <= 10 || countries.length > 1) {
      markup = countriesListTpl(countries);
      return refs.countriesList.insertAdjacentHTML('beforeend', markup);
    }
}

export default countriesMarkup;