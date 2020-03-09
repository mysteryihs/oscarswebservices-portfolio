import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

export const PortfolioPageTemplate = ({ title, content, contentComponent, dragonrush, qualityinspections, guanshu }) => {
  const PageContent = contentComponent || Content

  return (
    <div class="wrapper">
    <section class="container">
      <header class="major">
        <h2>Sed magna consequat lorem curabitur tempus</h2>
        <p>Elit aliquam vulputate egestas euismod nunc semper vehicula lorem blandit</p>
      </header>
      <div class="row features">
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper first">
            <a href="#" class="image featured"><img src="../../img/pic03.jpg" alt="" /></a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
          vel sem sit dolor neque semper magna lorem ipsum.</p>
        </section>
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper">
            <a href="#" class="image featured"><img src="../../img/pic04.jpg" alt="" /></a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
          vel sem sit dolor neque semper magna lorem ipsum.</p>
        </section>
        <section class="col-4 col-12-narrower feature">
          <div class="image-wrapper">
            <a href="#" class="image featured"><img src="../../img/pic05.jpg" alt="" /></a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
          vel sem sit dolor neque semper magna lorem ipsum.</p>
        </section>
      </div>
      <ul class="actions major">
        <li><a href="#" class="button">Elevate my awareness</a></li>
      </ul>
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

    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
