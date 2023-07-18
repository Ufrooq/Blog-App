import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Create from "./Components/create";
import BlogDetails from "./Components/BlogDetails";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
