import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { ToastContainer, toast } from "react-toastify";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    isError,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:8000/blogs/" + blog.id, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      } else {
        toast.success("Blog Deletd Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/");
        }, 1300);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <>
      {isLoading && (
        <>
          <lord-icon
            src="https://cdn.lordicon.com/xjovhxra.json"
            trigger="loop"
            colors="primary:#ff7979"
            style={{ width: "170px", height: "400px" }}
          ></lord-icon>
          <div
            style={{ color: "#ff7979", textAlign: "center", fontWeight: "600" }}
          >
            Data Loading..
          </div>
        </>
      )}
      {blog && (
        <div className="blog-details">
          <h2>{blog.title}</h2>
          <span>{blog.author}</span>
          <p>{blog.text}</p>
          <button onClick={handleDelete}>Delete Blog</button>
          <ToastContainer position="top-right" autoClose={1000} theme="light" />
        </div>
      )}
    </>
  );
};

export default BlogDetails;
