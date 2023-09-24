import { useRef } from "react";
import { baseUrl } from "../constant";

function AddPost({ fetchPosts }) {
  const postRef = useRef("");
  const addPostHandler = () => {
    const text = postRef.current.value;
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    }).then((res) => {
      console.log("Added Post");
      postRef.current.value = "";
      fetchPosts();
    });
  };

  return (
    <div className="card">
      <textarea ref={postRef} placeholder="What's on you mind?"></textarea>
      <button onClick={addPostHandler}>Add Post</button>
    </div>
  );
}

export default AddPost;
