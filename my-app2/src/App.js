import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Postlist from "./pages/Postlist";
import PostDetails from "./pages/PostDetails";
import Home from "./pages/Home";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post-list" element={<Postlist />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
