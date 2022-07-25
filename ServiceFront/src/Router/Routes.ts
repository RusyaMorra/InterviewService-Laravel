import PageBlog from "../UserPages/Blog/PageBlog"
import About from "../UserPages/AboutUs/About"
import Errors from "../UserPages/Errors/Errors"
import PostIdPage from "../UserPages/Blog/PostIdPage"
import Login from "../UserPages/Auth/Login"

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: PageBlog, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/errors', component: Errors, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]
