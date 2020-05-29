import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { SocialMediaNav } from "./social"
import Nav from "./nav"

const SiteTitle = () => {
	return (
		<Link to="/"><span className="rachel">Rachel</span> <span className="cherry">Cherry</span></Link>
	)
}

const SiteTitleElement = ({ isHome }) => {
	const siteTitleClass = "site-title"
	if (isHome) {
		return (
			<h1 className={siteTitleClass}>
				<SiteTitle />
			</h1>
		)
	}
	return (
		<div className={siteTitleClass}>
			<SiteTitle />
		</div>
	)
}

SiteTitleElement.propTypes = {
	isHome: PropTypes.bool,
}

SiteTitleElement.defaultProps = {
	isHome: false,
}

const AddSubscribeButton = () => {
	return (
		<a href="http://eepurl.com/dpKp0P" className="button subscribe-open" title="Subscribe to Rachel's newsletter">Subscribe</a>
	)
}

const Header = ({ isHome }) => {
	const navItems = [
		//{ slug: '/about', label: 'About' },
		//{ slug: '/blog', label: 'Blog' },
		{ slug: "/services/", label: "Services" },
		{ slug: "/accessibility/", label: "Accessibility" },
		{ slug: "/speaking/", label: "Speaking" },
		{ url: "https://www.wpcampus.org/", label: "WPCampus" },
		{ slug: "/gatsby/", label: "Gatsby" },
		{ url: "https://shop.spreadshirt.com/rachelcherry/", label: "Shop" },
		{ slug: "/partners/", label: "Partners" },
		//{ slug: '/reading', label: 'Reading' },
		//{ slug: '/highered', label: 'Higher Ed' },
		{ slug: "/contact/", label: "Contact" },
	]

	return (
		<header id="header">
			<div className="container">
				<SiteTitleElement isHome={isHome} />
				<div className="site-subtitle">Accessibility. Higher ed. Engineer. Community. Open source.</div>
				<div className="site-nav-wrapper">
					<button className="site-nav-toggle" aria-label="Toggle menu">
						<div className="toggle-icon">
							<div className="bar one"></div>
							<div className="bar two"></div>
							<div className="bar three"></div>
						</div>
						<span className="toggle-label open-menu-label">Menu</span>
					</button>
					<span className="site-nav-small-header">Rachel Cherry</span>
					<Nav className="site-nav" label="Primary" items={navItems} />
					<AddSubscribeButton />
					<SocialMediaNav />
				</div>
			</div>
		</header>
	)
}

Header.propTypes = {
	isHome: PropTypes.bool,
}

Header.defaultProps = {
	isHome: false,
}

export default Header
