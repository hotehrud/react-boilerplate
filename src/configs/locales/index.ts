import en from './en';
import ko from './ko';

export interface ILanguage {
    author: string;
    all_menu: string;
}

export type LanguageKeys = keyof ILanguage;

const langs: any = {
    en,
    ko
}
export default langs;