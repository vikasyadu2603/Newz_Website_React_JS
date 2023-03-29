import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"
import Marquee from 'react-fast-marquee';
const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Culture</Link>
              </li>
              <li>
                <Link to='/politics'>Politics</Link>
              </li>
              <li>
                <Link to='/memes'>Memes</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/boxed'>Boxed</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
      <div style={{ backgroundColor: "red", color: "white" }}>
        <Marquee pauseOnHover>
          &nbsp; &nbsp;
          AbstractA news portal is an access point to news through internet service. This is. generally thought of as a Internet connection to a news source but the definition of a. “Portal” would include a newspaper, magazine or any other access to news which is also a. part of media convergence today.
        </Marquee>
      </div>
    </>
  )
}

export default Header
