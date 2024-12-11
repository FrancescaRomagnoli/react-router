import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const postId = useParams().id;
  const postsUrl = "http://localhost:3000/posts";

  const [post, setPost] = useState();

  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = (id) => {
    fetch(`${postsUrl}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      });
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </div>
  );
}
