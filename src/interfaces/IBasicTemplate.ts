import { ReactNode } from 'react';
import { LanguageKeys } from '../configs/locales';

export interface IBasicTemplate {
    title: LanguageKeys;
    children: ReactNode
}