import React, { useState } from 'react';
import { IHorizontalMenuProps, IMenuItem } from './IHorizontalMenu';
import { ItemWrapper, MenuWrapper } from './HorizontalMenuStyles';
import FormattedMessageWrapped from '../FormattedMessageWrapped';

const HorizontalMenu = ({
    items,
    selectedId = -1,
    useAllMenu,
    viewCount,
    color,
    size,
    onSelect,
    ...restProps
}: IHorizontalMenuProps) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(selectedId);

    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>, item: IMenuItem) => {
        e.preventDefault();
        e.stopPropagation();
        if (onSelect) {
            onSelect(item);
        }
        setSelectedItem(item.id);
    };

    return (
        <MenuWrapper size={size} color={color} {...restProps}>
            {useAllMenu && (
                <ItemWrapper
                    viewCount={viewCount}
                    className={selectedItem === -1 && 'active'}
                    color={color}
                >
                    <a href="#none" onClick={e => onClickHandler(e, { id: -1 })}>
                        <FormattedMessageWrapped id={'all_menu'}/>
                    </a>
                </ItemWrapper>
            )}

            {items.map((item, index) => (
                <ItemWrapper
                    key={`menu-${item.id}`}
                    viewCount={viewCount}
                    className={selectedItem === item.id && 'active'}
                    color={color}
                >
                    <a href="#none" onClick={e => onClickHandler(e, item)}>
                        {item.title}
                    </a>
                </ItemWrapper>
            ))}
        </MenuWrapper>
    );
};

HorizontalMenu.defaultProps = {
    viewCount: 4.5,
    size: 'medium',
    color: 'default'
};

export default HorizontalMenu;
