import React from "react";
import {useNavigate } from 'react-router-dom';
import MyButton from "../../../UI/MyButton/MyButton"

const PostItem = function ({Mykey,...props}) {

    const router = useNavigate();
    console.log(router);


    return(

        <article {...Mykey}  className = "aa1">
            <div   className = "postwrapper" >
                <h1>{props.post.id}.{props.post.title}</h1>
                 <p>{props.post.body}</p>
            </div>
            <MyButton onClick = {() => router(`/posts/${props.post.id}`)} >Открыть</MyButton>
            <MyButton onClick = {()=> props.DeletePost(props.post)}  >удалить</MyButton>

        </article>

    )


}

export default PostItem
