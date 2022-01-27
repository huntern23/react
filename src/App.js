import React from 'react';
import Menu from "./components/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import HomePage from "./pages/HomePage/HomePage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import {UserPostsPage} from "./pages/UserPostsPage/UserPostsPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Menu/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<SingleUserPage/>}>
                        <Route path={'userPosts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={"/posts"} element={<PostsPage/>}>
                        <Route path={":id"} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                    </Route>

                    <Route/>


                </Route>
            </Routes>
        </div>
    );
};

export default App;
