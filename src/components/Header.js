import React from 'react'
import { Link } from "gatsby";
import headerStyle from "./Header.module.scss"
function Header() {
    return (
       <header className={headerStyle.header}>
           <h1>
               <Link className={headerStyle.logo} to="/">
               Netpixel Amplify
               </Link>
           </h1>
           <nav>
        <ul className={headerStyle.navlist}>
            <li><Link className={headerStyle.navitem} activeClassName={headerStyle.activeNavItem} to="/">Home</Link></li>
            <li><Link className={headerStyle.navitem} activeClassName={headerStyle.activeNavItem} to="/about">About us</Link></li>
            <li><Link className={headerStyle.navitem} activeClassName={headerStyle.activeNavItem} to="/contact">Contact us</Link></li>
            <li><Link className={headerStyle.navitem} activeClassName={headerStyle.activeNavItem} to="/blog">Blog</Link></li>
            <li> <a  className={headerStyle.navitem}  activeClassName={headerStyle.activeNavItem} href="https://www.instagram.com/?hl=en">Portfolio</a></li>
         </ul>
           </nav>
       </header>
    )
}

export default Header
