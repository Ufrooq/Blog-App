import BlogList from "./BlogList";
import { useFetch } from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="Home">
      {isError && (
        <lord-icon
          src="https://cdn.lordicon.com/tdrtiskw.json"
          trigger="loop"
          colors="primary:#ff7979,secondary:#ff7922"
          style={{ width: "300px", height: "400px" }}
        ></lord-icon>
      )}
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
      {blogs && <BlogList blogs={blogs} listTitle="Blogs List" />}
    </div>
  );
};

export default Home;
