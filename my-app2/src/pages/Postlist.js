import React, { useEffect, useState } from "react";

function Postlist() {
  const [recourceType, setRecourceType] = useState("posts");
  const [Items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${recourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  });

  return (
    <div>
      <button onClick={() => setRecourceType("posts")}>posts</button>
      <button onClick={() => setRecourceType("comments")}>comments</button>
      <button onClick={() => setRecourceType("users")}>users</button>
      <button onClick={() => setRecourceType("photos")}>photos</button>
      <button onClick={() => setRecourceType("todos")}>todos</button>
      <button onClick={() => setRecourceType("albums")}>albums</button>
      <h1>{recourceType}</h1>
      {Items.map((item) => {
        return <div>{JSON.stringify(item)}</div>;
      })}
    </div>
  );
}

export default Postlist;
