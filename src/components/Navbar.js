import React from 'react'
import { Link } from 'gatsby'
import MainLogo from './MainLogo'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }
  

  render() {
    return (
      <div className="header-wrapper">
        <div id="header" className="container">
          <MainLogo />
          <nav id="nav">
            <ul>
              <li>
                <Link to="/portfolio">Portfolio</Link>
                <ul>
                  {/* <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Magna phasellus</a></li>
                  <li><a href="#">Etiam dolore nisl</a></li>
                  <li>
                    <a href="#">Phasellus consequat</a>
                    <ul>
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Phasellus consequat</a></li>
                      <li><a href="#">Magna phasellus</a></li>
                      <li><a href="#">Etiam dolore nisl</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Veroeros feugiat</a></li> */}
                </ul>
              </li>
              <li><Link to="/services">Services</Link></li>
              <li className="break"><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar
