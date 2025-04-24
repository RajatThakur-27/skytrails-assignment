import React from "react";
import './Blog.css';
import Blogs from "../../Data/Blogs.jsx";
import { Link } from "react-router-dom";
import { useLikes } from "../../Context/LikeContext";

function Blog(){
    const { blogs } = useLikes;
    return(
        <div>
            <div className="write">
                <textarea placeholder="Write your blog..." className="textarea"></textarea>
                <button className="button">POST</button>
            </div>
            <div className="blog">
                <h2 className="headingg">Blog Posts</h2>
                {Blogs.map(blog => (
                    <div>
                        <div className="single-blog">
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-details">By <b>{blog.author}</b> on <b>{blog.date}</b></p>
                            <p className="blog-content">{blog.content.slice(0,50)} <Link to={`/blogs/${blog.id}`}>...Read More</Link></p>
                            <p className="likes">{blog.likes} UPVOTES</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;