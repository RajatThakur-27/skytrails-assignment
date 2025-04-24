import { useParams } from "react-router-dom";
import Blogs from "../../Data/Blogs";
import './BlogDetails.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLikes } from "../../Context/LikeContext";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = Blogs.find(b => b.id === parseInt(id));
  const currentLikes = blog.likes;
  const [like,setLike] = useState(currentLikes);
  const { blogs, likeBlog } = useLikes();

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="blog">
      <h2 className="title">{blog.title}</h2>
      <p className="details">By {blog.author} on {blog.date}</p>
      <div className="content">{blog.content}</div>
      <div className="footer">
        <button className="upvote" onClick={() => likeBlog(blog.id)}> {blog.likes} UPVOTE</button>
        <Link to={"/"} className="link">Back to Home</Link>
      </div>
    </div>
  );
};

export default BlogDetails;
