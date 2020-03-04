import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div style={{textAlign: "center"}}>
        <h1><b>Page not found</b></h1>
        <p>You looked for a page that doesn't exist.</p>
        <p><Link to="/" className="button">Click here to go back</Link></p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
  