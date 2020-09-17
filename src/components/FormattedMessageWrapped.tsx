import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageKeys } from '../configs/locales';

interface IFormattedMessageWrapped {
    id: LanguageKeys;
    children?: any;
}

const FormattedMessageWrapped = ({ children, ...restProps }: IFormattedMessageWrapped) => {
    return <FormattedMessage {...restProps}>{children}</FormattedMessage>;
};

export default FormattedMessageWrapped;
