import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Body = class extends React.Component {

    render() {
        return(
          <div className="is-preload">
            <div className="page-wrapper">
              <Navbar />
              <div>{this.props.children}</div>
              <Footer />
            </div>
          </div>
        )
    }
}

export default Body