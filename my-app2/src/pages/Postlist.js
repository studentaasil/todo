import React, { useEffect, useState } from "react";
import "./Postlist.css";

function Postlist() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [resourceType]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const tableHeaders = Object.keys(items[0] || {}).map((key) => (
    <th key={key}>{capitalizeFirstLetter(key)}</th>
  ));

  const filteredItems = items.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const tableRows = filteredItems.map((item) => (
    <tr key={item.id}>
      {Object.values(item).map((value, index) => (
        <td key={index}>{JSON.stringify(value)}</td>
      ))}
    </tr>
  ));

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("photos")}>Photos</button>
      <button onClick={() => setResourceType("todos")}>Todos</button>
      <button onClick={() => setResourceType("albums")}>Albums</button>
      <h1>{capitalizeFirstLetter(resourceType)}</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {filteredItems.length > 0 && (
        <table>
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      )}
    </div>
  );
}

export default Postlist;
