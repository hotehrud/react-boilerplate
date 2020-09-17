import { ReactNode } from 'react';

export interface IPrivateIRoute {
    path: string;
    loginStatus: boolean;
    children: ReactNode
}