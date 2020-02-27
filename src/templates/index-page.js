import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import "../styles/main.css"
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Hero from '../components/Hero'
import Feature1 from '../components/Feature1'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div className="homepage">
    <div className="header-wrapper">
    <Hero />
    </div>
    <div>
      <Feature1 />


				<div id="promo-wrapper">
					<section id="promo">
						<h2>Neque semper magna et lorem ipsum adipiscing</h2>
						<a href="#" class="button">Breach the thresholds</a>
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
									<a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
								vel sem sit dolor neque semper magna lorem ipsum.</p>
							</section>
							<section class="col-4 col-12-narrower feature">
								<div class="image-wrapper">
									<a href="#" class="image featured"><img src="images/pic04.jpg" alt="" /></a>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
								vel sem sit dolor neque semper magna lorem ipsum.</p>
							</section>
							<section class="col-4 col-12-narrower feature">
								<div class="image-wrapper">
									<a href="#" class="image featured"><img src="images/pic05.jpg" alt="" /></a>
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

      <section className="section section--gradient">
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
      </section>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
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
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
