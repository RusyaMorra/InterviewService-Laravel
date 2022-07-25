import { useState } from "react";

import PostItem from "./PostItem"

const PostList = function ({posts, title, DeletePost}) {
 
    return(
        <div className = "postList" >
            <h1>{title}</h1>
            {posts.map((post) =>
                <PostItem DeletePost = {DeletePost} key = {post.id}  post = {post} />
            )}

        </div>
    )


}

export default PostList 