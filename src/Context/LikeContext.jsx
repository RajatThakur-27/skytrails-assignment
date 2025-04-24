// src/context/LikeContext.js
import { createContext, useContext, useState } from "react";
import Blogs from "../Data/Blogs"; // original blog data

const LikeContext = createContext();

export const useLikes = () => useContext(LikeContext);

export const LikeProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(Blogs);

  const likeBlog = (id) => {
    setBlogs(prev =>
      prev.map(blog =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  return (
    <LikeContext.Provider value={{ blogs, likeBlog }}>
      {children}
    </LikeContext.Provider>
  );
};
