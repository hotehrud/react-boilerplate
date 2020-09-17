import { rgba } from 'polished';

export const mainColor = '#228be6';

export const mainColors = {
    blue: '#228be6',
    gray: '#e0e0e0',
    pink: '#f06595',
    white: '#fff',
    orange: '#fe7940',
    black: '#000',
    red: '#dc004e',
    transparent: 'transparent'
};

export const bgColors = {
    default: '#fafafa',
    primary: '#fff',
    secondary: '#f4fbfe',
    dark: rgba('#000', 0.96),
    overlay: rgba('#000', 0.8),
    sidebar: mainColors.blue,
    // header: mainColors.blue
    header: mainColors.white
};

export const fontColors = {
    white: '#fff',
    inactiveBlack: rgba('#000', 0.5),
    blue: mainColors.blue,
    black: rgba('#000', 0.8)
};
