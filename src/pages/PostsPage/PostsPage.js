import React, {useEffect, useState} from 'react';
import {PostService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import {Outlet} from "react-router-dom";
import css from "../PostsPage/PostsPage.module.css"

const PostsPage = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        PostService.getAll().then(value => setPosts([...value]))
    },[])
    return (
        <div className={css.flex}>

           <div>{posts.map(post=><Post key={post.id} post={post}/>)}</div>
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default PostsPage;