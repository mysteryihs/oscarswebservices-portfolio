import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import "../styles/main.css"
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Img from 'gatsby-image'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  hero,
  affordableled,
  qualityinspections,
}) => (
  <div className="homepage">
    <div className="header-wrapper">
      <section id="hero" className="container">
        <header>
          <h2>{hero.title1}
          <br />
          {hero.title2}</h2>
        </header>
        <p>{hero.subtitle1}
        <br />
        {hero.subtitle2}</p>
        {/* <ul className="actions">
          <li><Link to="/" className="button">Get this party started</Link></li>
        </ul> */}
      </section>
    </div>
    <div>


    <div class="wrapper">
      <div class="container">
          <div class="row">
              <section class="col-6 col-12-narrower feature">
                  <div class="image-wrapper first">
                      <a href="#" class="image featured first"><Img fluid={affordableled.childImageSharp.fluid} alt="test" style={{maxHeight: "255px"}}/></a>
                  </div>
                  <header>
                      <h2>Semper magna neque vel<br />
                      adipiscing curabitur</h2>
                  </header>
                  <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                  sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
                  adipiscing elit. Curabitur vel sem sit.</p>
                  <ul class="actions">
                      <li><a href="#" class="button">Elevate my awareness</a></li>
                  </ul>
              </section>
              <section class="col-6 col-12-narrower feature">
                  <div class="image-wrapper">
                      <a href="#" class="image featured"><Img fluid={qualityinspections.childImageSharp.fluid} alt="test" style={{maxHeight: "255px"}} /></a>
                  </div>
                  <header>
                      <h2>Amet lorem ipsum dolor<br />
                      sit consequat magna</h2>
                  </header>
                  <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                  sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
                  adipiscing elit. Curabitur vel sem sit.</p>
                  <ul class="actions">
                      <li><a href="#" class="button">Elevate my awareness</a></li>
                  </ul>
              </section>
          </div>
      </div>
    </div>


				<div id="promo-wrapper">
					<section id="promo">
						<h2>Neque semper magna et lorem ipsum adipiscing</h2>
						<Link to="/" className="button">Breach the thresholds</Link>
					</section>
				</div>


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

      {/* <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div>
        <BlogRoll />
      </div>

    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  hero: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        hero={frontmatter.hero}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        affordableled={data.affordableled}
        qualityinspections={data.qualityinspections}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
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

    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        hero {
          title1
          title2
          subtitle1
          subtitle2
        }
        title
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
