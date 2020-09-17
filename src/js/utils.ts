import { shouldPolyfill } from '@formatjs/intl-relativetimeformat/should-polyfill';

export async function polyfill(locale: string) {
    if (shouldPolyfill()) {
        // Load the polyfill 1st BEFORE loading data
        await import('@formatjs/intl-relativetimeformat/polyfill');
    }

    // @ts-ignore
    if (Intl.RelativeTimeFormat.polyfilled) {
        switch (locale) {
            default:
                // @ts-ignore
                await import('@formatjs/intl-relativetimeformat/locale-data/ko');
                break;
            case 'en':
                // @ts-ignore
                await import('@formatjs/intl-relativetimeformat/locale-data/en');
                break;
        }
    }
}