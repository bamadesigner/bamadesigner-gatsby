/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Main from "./main"
import Footer from "./footer"

import SEO from "../components/seo"

const Layout = ({ isHome, pageTitle, pageDescription, ogImage, children }) => {
	return (
		<>
			<SEO title={pageTitle} description={pageDescription} ogImage={ogImage} />
			<a href="#content" id="skip-nav">Skip to main content</a>
			<div id="wrapper">
				<div id="bamadesigner-pic-small"></div>
				<Header isHome={isHome} />
				<Main>{children}</Main>
				<Footer />
			</div>
		</>
	)
}

Layout.propTypes = {
	isHome: PropTypes.bool,
	pageTitle: PropTypes.string,
	pageDescription: PropTypes.string,
	children: PropTypes.node.isRequired,
	ogImage: PropTypes.string,
}

Layout.defaultProps = {
	isHome: false,
	pageTitle: "",
	pageDescription: "",
	ogImage: ""
}

export default Layout
