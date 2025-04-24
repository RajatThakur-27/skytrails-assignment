import React from "react";
import './Header.css';

function Header(){
    return(
        <div className="header">
            <div className="imge">
                <img src="/logo192.png" className="image"></img>
            </div>
            <div className="heading">
                BLOGGER
            </div>
        </div>
    );
}

export default Header;