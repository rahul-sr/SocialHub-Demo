import { createContext } from "react";

import AddPost from "./AddPost";
import Post from "./Post";
import { useFetchPosts } from "../hooks/useFetchPosts";

export const PostContext = createContext();

const p = [
  {
    text: "Travelling to NY",
    like: 10,
  },
  {
    text: "Beautiful Day",
    like: 2,
  },
  {
    text: "IND vs AUS, What a match!",
    like: 20,
  },
  {
    text: "AI is getting real!",
    like: 5,
  },
];

function PostContainer() {
  const [posts, fetchPosts] = [p, () => {}];
  return (
    <PostContext.Provider value={fetchPosts}>
      <div className="container">
        <AddPost fetchPosts={fetchPosts} />
        {posts.map((post) => (
          <Post key={post._id} postInfo={post} />
        ))}
      </div>
    </PostContext.Provider>
  );
}

export default PostContainer;

// PostContainer -> Post -> PostAction
// ContextAPI
// Redux
// useReducer
