import { useParams } from "react-router-dom";
import { useGetAllPostsQuery } from "../reducers/posts";

function SinglePostPage() {
  const { data, error, isLoading } = useGetAllPostsQuery();
  const params = useParams();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const singlePost = data.data.posts.filter((post) => post._id === params.id);
  console.log(singlePost);
  return (
    <div>
      {singlePost.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <h2>{post.price}</h2>
          <h3>Posted by: {post.author.username}</h3>
        </div>
      ))}
    </div>
  );
}

export default SinglePostPage;
