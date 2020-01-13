import React from 'react'
import Logo from '../images/gidraLogo.png'
import {FaGoogle} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default ()=> (
  <footer className="footer-container">
    <section className='footer-links-container'>
      <div className="footer-links">
        <ul>
          <li className="main-link">Store</li>
          <li className="link">Catalog</li>
          <li className="link">Popular</li>
          <li className="link">Features</li>
        </ul>
        <ul>
          <li className="main-link">About</li>
          <li className="link">Catalog</li>
          <li className="link">Popular</li>
          <li className="link">Features</li>
        </ul>
        <ul>
          <li className="main-link">Catalog</li>
          <li className="link">Catalog</li>
          <li className="link">Popular</li>
          <li className="link">Features</li>
        </ul>
      </div>
      <div className="footer-logo-container">
        <figure>
          <img src={Logo}/>
        </figure>
        <p className="gidra-p"><span className="gidra-footer">Gidra</span><br />
        Your music career success partner</p>
      </div>
    </section>
    <section className="footer-copyright">
      <p className="copy-right">&copy;2018. All rights reserved</p>
      <div>
        <FaTwitter className="footer-icon"/>
        <FaFacebookF className="footer-icon" />
        <FaGoogle className="footer-icon"/>
        <FaInstagram className="footer-icon"/>
      </div>
    </section>
  </footer>
)