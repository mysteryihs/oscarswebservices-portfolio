import React from 'react'
import { Link } from 'gatsby'

const Hero = class extends React.Component {
    render() {
        return(
            <section id="hero" className="container">
            <header>
              <h2>Telephasic is a responsive
              <br />
              site template by <Link to="/">HTML5 UP</Link></h2>
            </header>
            <p>Designed and built by <Link to="/">AJ</Link> and released for free under
            <br />
            the <Link to="/">Creative Commons Attribution 3.0 license.</Link></p>
            <ul className="actions">
              <li><Link to="/" className="button">Get this party started</Link></li>
            </ul>
          </section>
        )
    }
}

export default Hero