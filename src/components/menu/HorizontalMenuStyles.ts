import styled, { css } from 'styled-components';
import { fontColors, mainColors } from '../../styles/colors';
import {
    IHorizontalMenuColor,
    IHorizontalMenuProps,
    IHorizontalMenuSize,
    IHorizontalMenuStyleProps,
} from './IHorizontalMenu';

const sizes: IHorizontalMenuSize = {
    large: {
        height: '64px',
        fontSize: '1em',
    },
    medium: {
        height: '40px',
        fontSize: '0.875em',
    },
    small: {
        height: '32px',
        fontSize: '0.875em',
    },
};

const colors: IHorizontalMenuColor = {
    default: {
        backgroundColor: mainColors.white,
        color: fontColors.inactiveBlack,
        activeColor: fontColors.blue,
    },
    primary: {
        backgroundColor: mainColors.blue,
        color: fontColors.inactiveBlack,
        activeColor: fontColors.blue,
    },
    secondary: {
        backgroundColor: mainColors.red,
        color: fontColors.white,
        activeColor: 'red',
    },
};

export const MenuWrapper: any = styled.ul`
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none; // IE에서 스크롤바 감춤
    &::-webkit-scrollbar {
        display: none !important; // 윈도우 크롬 등
    }

    ${({ size, color }: IHorizontalMenuStyleProps) => css`
        font-size: ${sizes[size]!.fontSize};
        height: ${sizes[size]!.height};
        background-color: ${colors[color]!.backgroundColor};
    `}
`;

export const ItemWrapper: any = styled.li`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    ${({ viewCount, color }: IHorizontalMenuProps) => css`
        width: calc(100% / ${viewCount});
        color: ${colors[color]!.color};
        &.active {
            color: ${colors[color]!.activeColor};
        }
        &:hover {
            font-weight: bold;
        }
    `}
`;
