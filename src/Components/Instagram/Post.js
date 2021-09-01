import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { projectFirestore, firebaseGet } from "../../firebase";
import { Button } from "@material-ui/core";
import firebase from "firebase";
function Post({ post, postId, user }) {
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = projectFirestore
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();

    projectFirestore
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({
        text: comment,
        email: user.email,
        username: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setComment("");
  };

  return (
    <div className="post">
      {/* header => avatar + username */}
      <div className="post__header">
        <Avatar alt={post.username} src="/static/images" />
        <h3>{post.username}</h3>
      </div>
      {/* post image */}
      <img src={post.imageUrl} alt="" className="post__image" />
      {/* username + caption */}
      <h4 className="post__text">
        <strong>{post.username}</strong> : {post.caption}
      </h4>
      {/* Post comment */}
      <div className="post__comments">
        {comments.map((comment) => (
          <p className="comment" key={postId}>
            <strong>{comment.username}</strong> :<p>{comment.text}</p> :
          </p>
        ))}
      </div>
      {user && (
        <form className="post__comment">
          <input
            className="post__input"
            type="text"
            placeholder="Enter a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </Button>
        </form>
      )}
    </div>
  );
}

export default Post;
