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

import("../scss/styles.scss")

const Layout = (props) => {
  return (
    <>
      <SEO title={props.pageTitle} description={props.pageDescription} />
      <a href="#content" id="skip-nav">Skip to main content</a>
      <div id="wrapper">
        <div id="bamadesigner-pic-small"></div>
        <Header isHome={props.isHome} />
        <Main>{props.children}</Main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
