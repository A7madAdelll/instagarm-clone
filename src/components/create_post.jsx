// CreatePost.jsx
import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      const postRef = await addDoc(collection(db, "posts"), {
        content,
        likes: 0,
        comments: [],
        createdAt: serverTimestamp(),
      });

      setContent("");
      if (onPostCreated) onPostCreated(); // Optional callback to refresh the feed
      console.log("Post created with ID:", postRef.id);
    } catch (err) {
      console.error("Error creating post:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows={3}
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>
        Post
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f1f1f1",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    resize: "none",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
  },
};

export default CreatePost;
