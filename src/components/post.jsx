// Post.jsx
import { useState } from "react";
import { db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = async () => {
    const postRef = doc(db, "posts", post.id);
    const newLikes = likes + 1;
    setLikes(newLikes);
    await updateDoc(postRef, { likes: newLikes });
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    const newComments = [...comments, commentInput];
    setComments(newComments);
    setCommentInput("");
    const postRef = doc(db, "posts", post.id);
    await updateDoc(postRef, { comments: newComments });
  };

  return (
    <div style={styles.post}>
      <p>{post.content}</p>
      <button onClick={handleLike} style={styles.button}>
        👍 Like ({likes})
      </button>

      <form onSubmit={handleAddComment} style={styles.commentForm}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Comment
        </button>
      </form>

      <div style={styles.commentSection}>
        <strong>Comments:</strong>
        <ul>
          {comments.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  post: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "20px",
    background: "#f9f9f9",
  },
  button: {
    marginTop: "10px",
    padding: "6px 12px",
    cursor: "pointer",
  },
  input: {
    padding: "8px",
    width: "100%",
    marginTop: "10px",
    fontSize: "14px",
  },
  commentForm: {
    marginTop: "10px",
  },
  commentSection: {
    marginTop: "15px",
  },
};

export default Post;
