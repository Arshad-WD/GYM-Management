import React, { useEffect, useState } from "react";
import { db } from "../../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, "posts");
        const postsSnapshot = await getDocs(postsCollection);

        if (!postsSnapshot.empty) {
          const fetchedPosts = postsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(fetchedPosts);
        } else {
          console.log("No posts found.");
        }
      } catch (error) {
        console.error("Error fetching posts: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-gray-400">Loading latest posts...</div>;
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Latest Posts</h2>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-200">{post.title}</h3>
              <p className="text-gray-400">{post.content}</p>
              <p className="text-gray-500 text-sm">
                Published on:{" "}
                {new Date(post.createdAt?.seconds * 1000).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No posts available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Posts;
