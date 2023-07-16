import React from "react";

const BlogList = ({ blogs, listTitle }) => {
  return (
    <>
      <h1 style={{ marginTop: "70px" }}>{listTitle}!</h1>
      <div className="cards">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <h5>{blog.author}</h5>
            <button>Delete Blog</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
