import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Iframe from "@wpcampus/wpcampus-iframe"

import Layout from "../components/layout"
import Article from "../components/article"

export default function Template({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark
	let pageTitle = null
	if (frontmatter.pageTitle) {
		pageTitle = frontmatter.pageTitle
	} else if (frontmatter.title) {
		pageTitle = frontmatter.title
	}

	const iframeAttr = {
		title: "Contact form",
		src: "https://wp.bamadesigner.com/forms/contact/",
		origins: ["https://wp.bamadesigner.com"]
	}

	return (
		<Layout pageTitle={pageTitle} pageDescription={frontmatter.description}>
			<Article pageTitle={pageTitle} html={html} />
			<Iframe {...iframeAttr} />
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