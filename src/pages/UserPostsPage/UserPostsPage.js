import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {PostService} from "../../services/post.service";
import UserPost from "../../components/UserPost/UserPost";

const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        PostService.getUserPostsById(id).then(value => setPosts([...value]));
    }, [id]);

    return (
        <div>
            <div>
                <h3>User Posts</h3>
                {posts.map(value => <UserPost key={value.id} post={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserPostsPage};