import { useContext } from "react";
import { baseUrl } from "../constant";
import { PostContext } from "./PostContainer";

function PostAction({ postId }) {
  const fetchPosts = useContext(PostContext);

  const likeHandler = () => {
    fetch(`${baseUrl}/${postId}/like`, {
      method: "POST",
    }).then((res) => {
      console.log("Liked");
      fetchPosts();
    });
  };
  return (
    <>
      <div className="action">
        <button onClick={likeHandler}>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          Like
        </button>
        <button>
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          Comment
        </button>
        <button>
          <i className="fa fa-share--square-o" aria-hidden="true"></i>
          Share
        </button>
      </div>
      <div className="comment">
        <textarea placeholder="Write a comment"></textarea>
      </div>
    </>
  );
}

export default PostAction;
