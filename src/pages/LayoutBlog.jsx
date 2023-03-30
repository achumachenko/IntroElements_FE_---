import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const LayoutBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const loaction = useLocation();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);
    console.log(loaction);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [id]);

    return (
        <div className="">
            <button onClick={goBack}>Go back</button>
            {post && (
                <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                </>
            )}
        </div>
    );
};
export { LayoutBlog };