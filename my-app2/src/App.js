import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Contact from "./pages/Contact";
import Postlist from "./pages/Postlist";
import PostDetails from "./pages/PostDetails";
import Home from "./pages/Home";
import Todo from "./Todo";
import Quiz from "./Quiz/Quiz";

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
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
