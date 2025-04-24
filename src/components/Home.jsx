import React from "react";
import './Home.css';
import Header from "./Header/Header";
import Blog from "./Blog/Blog";

function Home(){
    return(
        <div className="home">
            <Header></Header>
            <Blog></Blog>
        </div>
    );
}

export default Home;