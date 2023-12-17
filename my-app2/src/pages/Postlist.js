import React, { useEffect, useState } from "react";

function Postlist() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Postlist;
