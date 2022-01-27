import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import css from "./Menu.module.css";

const Menu = () => {
    return (

        <div>
           <div className={css.text}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
           </div>
            <Outlet/>
        </div>


    );
};

export default Menu;