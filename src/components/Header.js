import React from 'react'
import { Link } from "gatsby";
function Header() {
    return (
       <header>
           <h1>Netpixel Amplify</h1>
           <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="https://www.instagram.com/?hl=en">Portfolio</Link></li>
         </ul>
           </nav>
       </header>
    )
}

export default Header
