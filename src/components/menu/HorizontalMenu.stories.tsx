import React from 'react';
import HorizontalMenu from './HorizontalMenu';
import { IMenuItem } from './IHorizontalMenu';

const items: Array<IMenuItem> = [
    {
        id: 0,
        title: '메뉴1'
    },
    {
        id: 1,
        title: '메뉴2'
    },
    {
        id: 2,
        title: '메뉴3'
    },
    {
        id: 3,
        title: '메뉴4'
    },
    {
        id: 4,
        title: '메뉴5'
    },
    {
        id: 5,
        title: '메뉴6'
    },
]

export default {
    title: 'components/HorizontalMenu',
    component: HorizontalMenu,
    // argTypes: {
    //     viewCount: {
    //         description: 'overwritten description',
    //         table: {
    //             type: {
    //                 summary: 'something short',
    //                 detail: 'something really really long'
    //             },
    //         },
    //         control: {
    //             type: 'number',
    //         },
    //     },
    // }
};

export const Basic = (args: any) => {
    return (
        <HorizontalMenu {...args} items={items}/>
    );
};
