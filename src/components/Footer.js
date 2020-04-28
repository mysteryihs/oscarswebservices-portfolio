import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
import ContactForm from './ContactForm'

const iconStyle = {
	fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: "300",
}

const Footer = class extends React.Component {
  render() {
    return (
      <div id="footer-wrapper">
					<div id="footer" className="container">
						<header className="major">
							<h2>Have any questions? Think you might need some help?</h2>
							<p>We are always open for a talk or a consultation. Our consultations are free.<br />
							We'll never charge you for anything we can't do.</p>
						</header>
						<div className="row">
							<section className="col-6 col-12-narrower">
								{/* <form method="post" data-netlify="true">
									<div className="row gtr-50">
										<div className="col-6 col-12-mobile">
											<input name="name" placeholder="Name" type="text" />
										</div>
										<div className="col-6 col-12-mobile">
											<input name="email" placeholder="Email" type="text" />
										</div>
										<div className="col-12">
											<textarea name="message" placeholder="Message"></textarea>
										</div>
										<div className="col-12">
											<ul className="actions">
												<li><input type="submit" value="Send Message" /></li>
												<li><input type="reset" value="Clear form" /></li>
											</ul>
										</div>
									</div>
								</form> */}
								<ContactForm />
							</section>
							<section className="col-6 col-12-narrower">
								<div className="row gtr-0">
									<ul className="divided icons col-6 col-12-mobile">
										<li className="icon brands fa-twitter"><a href="https://twitter.com/OscarYih"><span className="extra">twitter.com</span></a></li>
										<li className="icon brands fa-facebook-f"><a href="https://www.facebook.com/oscarwebservices/"><span className="extra">facebook.com</span></a></li>
										<li className="icon brands fa-linkedin"><a href="https://www.linkedin.com/company/oscar-web-services/"><span className="extra">linkedin.com</span></a></li>
									</ul>
									<ul className="divided icons col-6 col-12-mobile">
										<li className="fas fa-phone"><a href="tel:626-417-4219"><span className="extra" style={iconStyle}>(626) 417-4219</span></a></li>
										<li className="icon brands fa-yelp"><a href="https://www.yelp.com/biz/oscars-web-services-hacienda-heights"><span className="extra">yelp.com</span></a></li>
										<li className="fas fa-envelope"><a href="mailto:cyih@live.com"><span className="extra" style={iconStyle}>cyih@live.com</span></a></li>
									</ul>
								</div>
							</section>
						</div>
					</div>
					<div id="copyright" className="container">
						<ul className="menu">
							<li>&copy; All rights reserved.</li><li>Design: <Link to="/">Oscar's Web Services</Link></li>
						</ul>
					</div>
				</div>
    )
  }
}

export default Footer
