import React, {Component, Fragment} from 'react';
import Logo from '../images/logoOne.png'
import { IoIosMenu } from "react-icons/io";
import { Link } from 'gatsby'
import { FiGrid} from 'react-icons/fi'
class Navigation extends Component {
  Toggle = () => {
    let menuList = document.querySelectorAll('.nav-list-container')
    menuList.forEach(list => {
      list.classList.toggle('appear')
    })
  }
  render() {
    return (
      <Fragment>
        <div className="nav-container">
          <div className="logo-container">
            <img src={Logo} className="logo"/>
            <IoIosMenu className="menu" onClick={this.Toggle}/>
          </div>
          <nav className="nav-list-container">
            <Link className="nav-list">Companies</Link>
            <Link className="nav-list">Team</Link>
            <Link className="nav-list">Resources</Link>
            <Link className="nav-list">Programs</Link>
            <Link className="nav-list">Blog</Link>
            <Link className="nav-list">Contact</Link>
          </nav>
        </div>
      </Fragment>
    )
  }
}

export default Navigation
