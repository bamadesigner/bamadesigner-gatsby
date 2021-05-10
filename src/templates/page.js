import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"

export default function Template({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark

	useEffect(() => {
		// @TODO need to setup server side redirect.
		if ("/speaking/" === frontmatter.path) {
			navigate("/presenting")
		}
	})

	let pageTitle = null
	if (frontmatter.pageTitle) {
		pageTitle = frontmatter.pageTitle
	} else if (frontmatter.title) {
		pageTitle = frontmatter.title
	}
	return (
		<Layout pageTitle={pageTitle} pageDescription={frontmatter.description}>
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