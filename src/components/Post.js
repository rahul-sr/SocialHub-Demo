import PostAction from "./PostAction";

function Post({ postInfo }) {
  return (
    <div className="card">
      <p>{postInfo.text}</p>
      {postInfo.like > 0 && (
        <span className="like">
          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          {postInfo.like}
        </span>
      )}
      <PostAction postId={postInfo._id} />
    </div>
  );
}

export default Post;

// Prop Drilling
