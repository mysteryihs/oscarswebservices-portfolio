import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
import ContactForm from './ContactForm'

const Footer = class extends React.Component {
  render() {
    return (
      <div id="footer-wrapper">
					<div id="footer" class="container">
						<header class="major">
							<h2>Have any questions? Think you might need some help?</h2>
							<p>We are always open for a talk or a consultation. Our consultations are free.<br />
							We'll never charge you for anything we can't do.</p>
						</header>
						<div class="row">
							<section class="col-6 col-12-narrower">
								{/* <form method="post" data-netlify="true">
									<div class="row gtr-50">
										<div class="col-6 col-12-mobile">
											<input name="name" placeholder="Name" type="text" />
										</div>
										<div class="col-6 col-12-mobile">
											<input name="email" placeholder="Email" type="text" />
										</div>
										<div class="col-12">
											<textarea name="message" placeholder="Message"></textarea>
										</div>
										<div class="col-12">
											<ul class="actions">
												<li><input type="submit" value="Send Message" /></li>
												<li><input type="reset" value="Clear form" /></li>
											</ul>
										</div>
									</div>
								</form> */}
								<ContactForm />
							</section>
							<section class="col-6 col-12-narrower">
								<div class="row gtr-0">
									<ul class="divided icons col-6 col-12-mobile">
										<li class="icon brands fa-twitter"><a href="https://twitter.com/OscarYih"><span class="extra">twitter.com</span></a></li>
										<li class="icon brands fa-facebook-f"><a href="https://www.facebook.com/oscarwebservices/"><span class="extra">facebook.com</span></a></li>
										<li class="icon brands fa-linkedin"><a href="https://www.linkedin.com/company/oscar-web-services/"><span class="extra">linkedin.com</span></a></li>
									</ul>
									<ul class="divided icons col-6 col-12-mobile">
										<li class="icon brands fa-instagram"><a href="https://www.instagram.com/oscarwebservices/"><span class="extra">instagram.com</span></a></li>
										<li class="icon brands fa-youtube"><a href="/"><span class="extra">youtube.com</span></a></li>
										<li class="icon brands fa-yelp"><a href="https://www.yelp.com/biz/oscars-web-services-hacienda-heights"><span class="extra">yelp.com</span></a></li>
									</ul>
								</div>
							</section>
						</div>
					</div>
					<div id="copyright" class="container">
						<ul class="menu">
							<li>&copy; All rights reserved.</li><li>Design: <Link to="/">Oscar's Web Services</Link></li>
						</ul>
					</div>
				</div>
    )
  }
}

export default Footer
