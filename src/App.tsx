import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { SWRConfig } from 'swr';
import { GlobalStyle } from './styles';
import { RouteTypes } from './enums/Route';
import Login from './pages/Login';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import { IPrivateIRoute } from './interfaces/IRoute';
import { API_PATH } from './configs/path';

axios.defaults.baseURL = API_PATH;

function PrivateRoute({ loginStatus, children, ...restProps }: IPrivateIRoute) {
    return (
        <Route
            {...restProps}
            render={({ location }) =>
                loginStatus ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

function App() {
    return (
        <SWRConfig
            value={{
                fetcher: async (url) => {
                    const { data } = await axios.get(url);
                    return data;
                },
                revalidateOnFocus: false,
                onErrorRetry: (error, key, option, revalidate, { retryCount }: any) => {
                    if (retryCount >= 5) return;
                    if (error.status === 404) return;
                    // retry after 5 seconds
                    setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
                },
            }}
        >
            <BrowserRouter>
                <Switch>
                    <Route path={RouteTypes.HOME} exact component={Home} />
                    <Route path={RouteTypes.LOGIN} exact component={Login} />
                    <PrivateRoute path={RouteTypes.MYPAGE} loginStatus={false}>
                        <MyPage />
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>

            <GlobalStyle />
        </SWRConfig>
    );
}

export default App;
