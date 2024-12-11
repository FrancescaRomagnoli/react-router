import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const postId = useParams().id;
  const postsUrl = "http://localhost:3000/posts";

  const [post, setPost] = useState(null);

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
      {post ? (
        <>
          <h1 className="mt-5 mb-3">{post.title}</h1>
          <div className="link-secondary mb-3">{post.category}</div>
          <div className="d-flex justify-content-center">
            <img src={post.image}></img>
          </div>
          <p className="my-3">{post.description}</p>
          <div>
            {post.tags.map((tag) => {
              return (
                <>
                  <span className="badge text-bg-secondary me-2">{tag}</span>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div>loading post</div>
        </>
      )}
    </div>
  );
}
