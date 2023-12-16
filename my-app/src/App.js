import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./contact/contact";
import PostDetail from "./post/post-detail";
import PostList from "./post/post-list";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post-list" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
