import React from "react";
import { useNavigate } from "react-router-dom";

const BlogList = ({ blogs, listTitle }) => {
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/blog/${id}`);
  }

  return (
    <>
      <h1 style={{ marginTop: "70px" }}>{listTitle}!</h1>
      <div className="cards">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <h5>{blog.author}</h5>
            <button
              onClick={() => {
                handleDetails(blog.id);
              }}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
