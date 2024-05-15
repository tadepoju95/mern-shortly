import React from 'react';


const Footer = () => {

	return (
		<section className="fourth_section text-center text-md-start">
			<div className="container fourth_section_container">
		  		<img src="/images/logo.svg" alt="Shortly logo" className="shortly-logo" />
		  		<div className="footer">
		  		<div className="features-list">
		  			<h6>Features</h6>
		  			<ul>
			  			<a href="https://www.facebook.com/"><li>Link Shortening</li></a>
			  			<a href="https://www.facebook.com/"><li>Branded Links</li></a>
			  			<a href="https://www.facebook.com/"><li>Analytics</li></a>
		  			</ul>
		  		</div>
		  		<div className="text-list"> 
		  			<h6>Resources</h6>
		  			<ul>
			  			<a href="https://www.facebook.com/"><li>Blog</li></a>
			  			<a href="https://www.facebook.com/"><li>Developers</li></a>
			  			<a href="https://www.facebook.com/"><li>Support</li></a>
		  			</ul>
		  		</div>
		  		<div className="text-list">
		  			<h6>Company</h6>
		  			<ul>
			  			<a href="https://www.facebook.com/"><li>About</li></a>
			  			<a href="https://www.facebook.com/"><li>Our Team</li></a>
			  			<a href="https://www.facebook.com/"><li>Careers</li></a>
			  			<a href="https://www.facebook.com/"><li>Contact</li></a>
		  			</ul>
		  		</div>
		  		<div className="social-icons">
		  			<a href="https://www.facebook.com/"><img src="/images/icon-facebook.svg" alt="facebook icon" className="icon-list"/></a>
		  			<a href="https://twitter.com/"><img src="/images/icon-twitter.svg" alt="twitter icon" className="icon-list"/></a>
		  			<a href="https://www.pinterest.com/"><img src="/images/icon-pinterest.svg" alt="pinterest icon" className="icon-list"/></a>
		  			<a href="https://www.instagram.com/"><img src="/images/icon-instagram.svg" alt="instagram icon" className="icon-list"/></a>
		  		</div>
		  		</div>
			</div>
		</section>
	)
}

export default Footer;