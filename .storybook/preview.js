import locales from '../src/configs/locales';
import { GlobalStyle } from '../src/styles/index';
import { IntlProvider } from 'react-intl';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withIntlProvider=(Story,context)=>{
  return (
      <IntlProvider locale={'ko'} messages={locales['ko']}>
        <Story {...context} />
      </IntlProvider>
  )
}

const withGlobalProvider=(Story,context)=>{
  return (
      <>
        <Story {...context} />
        <GlobalStyle />
      </>
  )
}

export const decorators = [withIntlProvider, withGlobalProvider];