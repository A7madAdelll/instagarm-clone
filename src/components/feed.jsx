// Feed.jsx
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Post from "./Post";
import CreatePost from "./create_post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchPosts = async () => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const postList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(postList);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={styles.feed}>
      <button onClick={() => setShowModal(true)} style={styles.newPostButton}>
        ➕ New Post
      </button>

      <h2>📚 Feed</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button
              onClick={() => setShowModal(false)}
              style={styles.closeButton}
            >
              ✖
            </button>
            <CreatePost
              onPostCreated={() => {
                fetchPosts();
                setShowModal(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  feed: {
    maxWidth: "600px",
    margin: "0 auto",
    paddingTop: "20px",
    position: "relative",
    height: "600px", // fixed height
    overflowY: "auto", // enables vertical scrolling
    border: "1px solid #ccc", // optional: visual boundary
    padding: "10px", // optional: inner spacing
    backgroundColor: "#f9f9f9", // optional: better contrast
    borderRadius: "8px", // optional: rounded corners
  },
  newPostButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "500px",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "18px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default Feed;
