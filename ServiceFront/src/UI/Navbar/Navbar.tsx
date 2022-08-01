import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AuthContext from "../../Context/index";
import MyButton from "../MyButton/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext<undefined|any>(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <MyButton>
                <Link to="/login">Войти</Link>
            </MyButton>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
                <Link to="/mytodo">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
