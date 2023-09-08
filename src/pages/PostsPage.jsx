import { useGetAllPostsQuery } from "../reducers/posts";
import { useState } from "react";
import { Link } from "react-router-dom";

function PostsPage() {
  const { data, error, isLoading } = useGetAllPostsQuery();
  const [search, setSearch] = useState("");

  //   console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const filtered = data.data.posts.filter(
    (post) =>
      post.title.toLowerCase().startsWith(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filtered);

  return (
    <div>
      <div className="search">
        <label>Search by Title:</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch("")}>Clear</button>
      </div>
      {search
        ? filtered.map((i) => (
            <Link key={i.id} to={`/post/${i._id}`}>
              <div className="post">
                <h1>{i.title}</h1>
                <p>{i.description}</p>
                <h2>{i.price}</h2>
                <h3>Posted by: {i.author.username}</h3>
              </div>
            </Link>
          ))
        : data.data.posts.map((i) => (
            <Link key={i.id} to={`/post/${i._id}`}>
              <div className="post">
                <h1>{i.title}</h1>
                <p>{i.description}</p>
                <h2>{i.price}</h2>
                <h3>Posted by: {i.author.username}</h3>
              </div>
            </Link>
          ))}
    </div>
  );
}

export default PostsPage;
