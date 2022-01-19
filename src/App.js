import React from 'react';
import {useState, useEffect} from "react";

import "./App.css"
import css from "./App.module.css"
import cssBlock from "./components/components.module.css"
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails"
import Posts from "./components/Posts/Posts";


const App = () => {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)


    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    };
    
    const getUserId = (id) => {
      setUserId(id)
    }

    return (
        <div>
            <div  className={css.wrap}>
                <div className={cssBlock.block}><Users getUser={getUser}/></div>
                <div className={cssBlock.block}>{user&&<UserDetails user={user} getUserId={getUserId}/>}</div>
            </div>
            <div className={cssBlock.block}>{userId && <Posts userId={userId}/>}</div>
        </div>
    )
        ;
};

export default App;
