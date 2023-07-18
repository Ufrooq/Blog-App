import React, { useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, settext] = useState("");
  const description =
    "Suspendisse potenti. Morbi interdum justo id sagittis venenatis. Integer ac dapibus felis.";
  const [isPending, setPending] = useState(false);
  const navigate = useNavigate();

  const postNewBlog = async (newBlog) => {
    try {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      } else {
        setPending(false);
        toast.success("Blog Created Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (title == "" || author == "" || text == "") {
      toast.warn("Please Fill out every field!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setPending(true);
      const newBlog = { title, author, description, text };
      postNewBlog(newBlog);
      setTitle("");
      setAuthor("");
      settext("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }
  return (
    <>
      {!isPending ? (
        <div className="create-blog">
          <h2>Add a new Blog</h2>
          <form>
            <label>Blog Title : </label>
            <br />
            <input
              required
              className="input_"
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="enter here"
            />
            <label>Author Name :</label>
            <input
              required
              className="input_"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              type="text"
              placeholder="enter here"
            />
            <label>Blog Text : </label>
            <textarea
              required
              onChange={(e) => settext(e.target.value)}
              cols="10"
              value={text}
              rows="5"
              placeholder="enter here"
            />
            <button onClick={handleSubmit}>Create</button>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </form>
        </div>
      ) : (
        <lord-icon
          src="https://cdn.lordicon.com/xjovhxra.json"
          trigger="loop"
          colors="primary:#ff7979"
          style={{ width: "170px", height: "400px" }}
        ></lord-icon>
      )}
    </>
  );
};

export default Create;
