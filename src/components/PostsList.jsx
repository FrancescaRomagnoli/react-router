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

  return (
    <>
      <div className="row">
        {postsList.length > 0 ? (
          postsList.map((post) => {
            return (
              <div key={post.id} className="col col-4 my-3">
                <div className="card h-100">
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
