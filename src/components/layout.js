import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'


  const Layout = ({ pageTitle, children }) => {
    return (
      <div className={container}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/music" className={navLinkText}>
                music
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/art" className={navLinkText}>
                art
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/stream" className={navLinkText}>
                stream
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/poetry" className={navLinkText}>
                poetry
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                blog
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }
  
  export default Layout