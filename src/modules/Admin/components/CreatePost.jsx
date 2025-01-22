import React, { useState } from "react";
import { addPost } from "../../../services/dbService"; // Ensure this is the correct path to your dbService

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State for button disabling
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages
    setSuccess(""); // Clear any previous success messages

    if (!post.title || !post.content || !post.category) {
      setError("Please fill in all fields."); // Display error if any field is empty
      return;
    }

    try {
      setIsSubmitting(true); // Disable submit button during submission
      await addPost(post); // Call the post creation function (async)
      setSuccess("Post created successfully!"); // Display success message
      setPost({ title: "", content: "", category: "" }); // Clear the form after submission
    } catch (error) {
      setError("Failed to create post. Please try again later."); // Handle any errors from addPost
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300">Post Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleInputChange}
            placeholder="Enter the post title"
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300">Content</label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleInputChange}
            placeholder="Enter the post content"
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300">Category</label>
          <input
            type="text"
            name="category"
            value={post.category}
            onChange={handleInputChange}
            placeholder="Enter the category"
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>

        {/* Display error or success messages */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <button
          type="submit"
          className={`bg-blue-600 py-2 px-4 rounded-lg text-white hover:bg-blue-500 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`} // Disable button while submitting
          disabled={isSubmitting} // Disable submit button during submission
        >
          {isSubmitting ? "Submitting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
