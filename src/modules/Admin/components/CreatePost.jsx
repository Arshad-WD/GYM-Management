import React, { useState } from "react";

const CreatePost = ({ onPostCreate }) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.title && post.content && post.category) {
      onPostCreate(post);
      setPost({ title: "", content: "", category: "" });
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
        <button
          type="submit"
          className="bg-blue-600 py-2 px-4 rounded-lg text-white hover:bg-blue-500"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
