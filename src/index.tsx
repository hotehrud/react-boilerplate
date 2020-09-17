import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import locales from './configs/locales/index';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { polyfill } from './js/utils';

let usersLocale = window.localStorage.getItem('usersLocale') || window.navigator.language;
usersLocale = usersLocale.substring(0, 2);
const translationsForUsersLocale = locales[usersLocale] || locales['ko'];
polyfill(usersLocale);

ReactDOM.render(
    <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
