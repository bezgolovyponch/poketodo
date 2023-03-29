import { FC } from 'react'
import { Dashboard } from '@/pages/dashboard/Dashboard'

export interface IRoute {
    path: string
    element: FC
    auth: boolean
}

export const routePublic: IRoute[] = [
    { path: '/', element: Dashboard, auth: true },
    { path: '*', element: Dashboard, auth: false },
]
