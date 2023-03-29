import { Route, Routes } from 'react-router-dom'
import { IRoute, routePublic } from '@/router/routes/routePublic'
import AuthHOC from '@/router/routerComponents/AuthHOC'
import { routeDashboard } from '@/router/routes/routeDashboard'
import { ThemeProvider } from '@mui/material/styles'
import { useAppSelector } from '@/redux/store'
import { darkTheme, lightTheme } from '@/theme/theme'
import { CssBaseline } from '@mui/material'
import * as React from 'react'

export const MainRouter = () => {
    const theme = useAppSelector((state) => state.theme)
    const allRoutes: IRoute[] = [...routePublic, ...routeDashboard]

    return (
        <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <Routes>
                {allRoutes.map((route: IRoute) => {
                    const ReturnComponent = AuthHOC(route.element, route.auth)
                    return <Route path={route.path} element={<ReturnComponent />} key={route.path} />
                })}
            </Routes>
        </ThemeProvider>
    )
}
