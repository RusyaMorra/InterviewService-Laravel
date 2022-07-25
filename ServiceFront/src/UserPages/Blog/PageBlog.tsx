import { useState, useRef, useEffect } from "react";
import Counter from "../../UI/Counter/Counter";
import ClassCounter  from "../../UI/Counter/ClassCounter";
import PostList from "./WebComponentsBlog/PostList";
import PostForm  from "./WebComponentsBlog/PostForm";
import PostFilter from "./WebComponentsBlog/PostFilter";
import MyModal from "../../UI/MyModal/MyModal";
import MyButton from "../../UI/MyButton/MyButton";
import Loader from "../../UI/Loader/Loader";
import Pagination from "../../UI/Pagination/Pagination";
import {usePosts} from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import {usePagination} from "../../hooks/usePagination";
import {useFetching} from "../../hooks/useFetching";
import {getPageCount} from "../../utils/pages";

const styles = {
    div:{
       width: '200px',
       heigth: '200px',
       backgroundColor: 'blue'
    }
}

function PageBlog() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '',query: ''});
    const [modal, setModal] = useState(false);

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
    let totalPageArray = usePagination(totalPages);

    const [fetchPosts, isPostsLoading, postError, setIsLoading] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));

    })





    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
            fetchPosts();
        setIsLoading(false)

    },1000)
    },[filter,page] )







    const createPost = (newPost)=> {
        setPosts([ newPost,...posts])
        setModal(false)
    }

    const DeletePost = (PostID)=> {
        setPosts( posts.filter(post =>   post.id !== PostID.id))

    }


    const changePosts = (page)=> {
        setPage(page)
    }





 return <div>
            <Loader isPostLoading= {isPostsLoading}  />
            <div style = {styles.div}>тренинг</div>
            <div style = {{width: '200px',heigth: '200px', backgroundColor: 'red'  }}>тренинг</div>
            <div className = "aa">тренинг</div>

            <ClassCounter />

            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <h1>{filter.sort}</h1>
            <PostFilter filter = {filter}  setFilter={setFilter}  />
            {
                postError &&
                    <h1>Произошла ошибка</h1>
            }

            {posts.length < 1 ?
             <h1>Постов нет</h1>
            : <PostList DeletePost = {DeletePost}   posts = {sortedAndSearchedPost} title = {'Список постов'}/>
            }

            <Pagination totalPageArray = {totalPageArray}  changePosts = {changePosts} page = {page} />
        </div>
}

export default PageBlog;
