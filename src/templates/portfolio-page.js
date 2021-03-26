import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'
import { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

export const PortfolioPageTemplate = ({ title, content, contentComponent, dragonrush, qualityinspections, guanshu, affordableled, gwsecurity }) => {
  // const PageContent = contentComponent || Content

  return (
    <div class="wrapper">
    <section class="container">
      <header class="major">
        <h2>A few of our other projects</h2>
        <p>Some may have ceased to exist and others may have been redesigned <br /> but all have served their purpose.</p>
      </header>
      <div class="row features">
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper first">
          <a href="https://www.affordableled.com/" class="image featured"><Img fluid={affordableled.childImageSharp.fluid} alt="AffordableLED Site" title="AffordableLED" style={{height: "200px"}} className="image featured" /></a>
          </div>
          <p>Ecommerce website upgraded from Magento 1 to Magento 2 with an up to date look and security.</p>
        </section>
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper">
          <a href="https://www.gwsecurityusa.com/" class="image featured"><Img fluid={gwsecurity.childImageSharp.fluid} alt="GW Security Site" title="GW Security" style={{height: "200px"}} className="image featured" /></a>
          </div>
          <p>Updated a WooCommerce website with millions in annual revenue and optimized their SEO.</p>
        </section>
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper">
            <a href="https://thequalityhomeinspector.net/" class="image featured"><Img fluid={qualityinspections.childImageSharp.fluid} alt="Quality Inspections Site" title="Quality Property Inspections" style={{height: "200px"}} /></a>
          </div>
          <p>Custom hand-coded website using Jekyll static site generator with Github Pages for hosting.</p>
        </section>
      </div>

      {/*dragon rush example is sandwiched with two empty columns in order to center it -- a hacky attempt at centering*/}
      <div class="row features">
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper first">
            <Img fluid={dragonrush.childImageSharp.fluid} alt="Dragon Rush Site" title="Dragon Rush" style={{height: "200px"}} className="image featured" />
          </div>
          <p>Built using Ruby on Rails with Heroku hosting and includes OAuth and Email integration.</p>
        </section>
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper">
          </div>
        </section>
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper">
            <a href="https://young-cliffs-48660.herokuapp.com/" class="image featured"><Img fluid={guanshu.childImageSharp.fluid} alt="Guan Shu Site" title="Guan Shu" style={{height: "200px"}} /></a>
          </div>
          <p>Ecommerce website built using Ruby on Rails with the Spree extension allowing for customized website including payment gateways.</p>
        </section>
      </div>
    </section>
  </div>
  )
}

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PortfolioPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        dragonrush={data.dragonrush}
        qualityinspections={data.qualityinspections}
        guanshu={data.guanshu}
        affordableled={data.affordableled}
        gwsecurity={data.gwsecurity}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    dragonrush: file(relativePath: {eq: "dragonrush_trim.png"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    guanshu: file(relativePath: {eq: "guanshu_trim.png"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    qualityinspections: file(relativePath: {eq: "quality_trim.png"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gwsecurity: file(relativePath: {eq: "gwsecurity_trim.png"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    affordableled: file(relativePath: {eq: "afford_trim.png"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
