import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";
import AuthContext from "../Context/index";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);


    if (isLoading) {
        return <Loader/>
    }

    return (

        isAuth
            ?
            <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            element = {<route.component/>}
                            path = {route.path}
                            exact = {route.exact}
                            key = {route.path}
                        />
                     )}

            </Routes>
             :
            <Routes>
                   {publicRoutes.map(route =>
                    <Route
                        element = {<route.component/>}
                        path = {route.path}
                        exact = {route.exact}
                        key = {route.path}
                    />
                )}

            </Routes>

    );
};

export default AppRouter;
