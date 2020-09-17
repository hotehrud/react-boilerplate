import { LanguageKeys } from '../../configs/locales';

export type HorizontalMenuSizes = 'large' | 'medium' | 'small';
export type HorizontalMenuColors = 'default' | 'primary' | 'secondary';

export type IHorizontalMenuSize = Partial<{
    [key in HorizontalMenuSizes]: ISize
}>

export type IHorizontalMenuColor = Partial<{
    [key in HorizontalMenuColors]: IColor
}>

interface ISize {
    height?: string;
    fontSize?: string;
}

interface IColor {
    backgroundColor?: string;
    color?: string;
    activeColor?: string;
}

export interface IMenuItem {
    id: number;
    code?: number;
    title?: LanguageKeys | string;
    thumbnail?: string;

}

export interface IHorizontalMenuStyleProps {
    size: HorizontalMenuSizes;
    color: HorizontalMenuColors;
}

export interface IHorizontalMenuProps extends IHorizontalMenuStyleProps {
    items: Array<IMenuItem>;
    selectedId?: number;
    useAllMenu?: boolean;
    viewCount?: number;
    onSelect?: (params: any) => void;
    style?: any;
    className?: string;
}
