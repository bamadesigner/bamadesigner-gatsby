import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"

import gatsbyLogo from "../images/Gatsby_Monogram_Black.png"
import gatsbySocial from "../images/gatsby-social.png"

export default function Template({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark
	let pageTitle = null
	if (frontmatter.pageTitle) {
		pageTitle = frontmatter.pageTitle
	} else if (frontmatter.title) {
		pageTitle = frontmatter.title
	}

	return (
		<Layout pageTitle={pageTitle} pageDescription={frontmatter.description} ogImage={gatsbySocial}>
			<img
				alt="Gatsby logo"
				className="alignright"
				src={gatsbyLogo}
			/>
			<Article pageTitle={pageTitle} html={html} />
		</Layout>
	)
}

Template.propTypes = {
	data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`