import React from 'react'
import { Link } from 'gatsby'

const MainLogo = class extends React.Component {
    render() {
        return(
            <h1 id="logo">
                <Link to="/" title="Logo">
                    Telephasic
                </Link>
            </h1>
        )
    }
}

export default MainLogo