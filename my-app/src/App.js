import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./contact/Contact";
import PostDetail from "./post/Post-detail";
import PostList from "./post/Post-list";
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
