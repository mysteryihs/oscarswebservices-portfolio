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
                <Link to="/dropdown">Dropdown</Link>
                {/* <ul>
                  <li><a href="#">Lorem ipsum dolor</a></li>
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
                  <li><a href="#">Veroeros feugiat</a></li>
                </ul> */}
              </li>
              <li><Link to="/left-sidebar">Left Sidebar</Link></li>
              <li className="break"><Link to="/right-sidebar">Right Sidebar</Link></li>
              <li><Link to="/no-sidebar">No sidebar</Link></li>
            </ul>
          </nav>
        </div>
        <section id="hero" className="container">
							<header>
								<h2>Telephasic is a responsive
								<br />
								site template by <a href="http://html5up.net">HTML5 UP</a></h2>
							</header>
							<p>Designed and built by <a href="http://twitter.com/ajlkn">AJ</a> and released for free under
							<br />
							the <a href="http://html5up.net/license">Creative Commons Attribution 3.0 license</a>.</p>
							<ul className="actions">
								<li><a href="#" className="button">Get this party started</a></li>
							</ul>
						</section>
      </div>
    )
  }
}

export default Navbar
