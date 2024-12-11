import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostsList() {
  const [postsList, setPostsList] = useState([]);

  // # posts fetch
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => {
        setPostsList(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // # posts delete

  const fetchDeletePost = (id) => {
    const deleteUrl = `http://localhost:3000/posts/${id}`;

    fetch(deleteUrl, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        fetchPosts();
      });
  };

  const handleDeletePostButton = (id) => {
    fetchDeletePost(id);
  };

  return (
    <>
      <div className="row">
        {postsList.length > 0 ? (
          postsList.map((post) => {
            return (
              <div key={post.id} className="col col-4 my-3">
                <div className="post-card card h-100">
                  <button
                    onClick={() => handleDeletePostButton(post.id)}
                    data-bs-theme="dark"
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                  <img
                    src={`${post.image}`}
                    className="card-img-top"
                    alt={post.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <Link to={`/posts/${post.id}`}>
                      <button className="btn btn-info">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h6>No posts available </h6>
          </div>
        )}
      </div>
    </>
  );
}
