import React from 'react'

const Hero = class extends React.Component {
    render() {
        return(
            <section id="hero" className="container">
            <header>
              <h2>Oscar's Web Services is
              <br />
              a premier web design business</h2>
            </header>
            <p>Specializing in Ecommerce and Business Websites 
            <br />
            Located in and servicing Southern California</p>
            {/* <ul className="actions">
              <li><Link to="/" className="button">Get this party started</Link></li>
            </ul> */}
          </section>
        )
    }
}

export default Hero