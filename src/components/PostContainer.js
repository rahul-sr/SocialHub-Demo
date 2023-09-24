import { createContext } from "react";

import AddPost from "./AddPost";
import Post from "./Post";
import { useFetchPosts } from "../hooks/useFetchPosts";

export const PostContext = createContext();

function PostContainer() {
  const [posts, fetchPosts] = useFetchPosts();
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
