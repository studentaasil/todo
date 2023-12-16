import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./contact/contact";
import PostDetail from "./post/post-detail";
import PostList from "./post/post-list";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Contact />
      <PostDetail />
      <PostList />
      <Home />
    </div>
  );
}

export default App;
