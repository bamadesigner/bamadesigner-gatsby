import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"

const HomePage = ({ data }) => {
	const { markdownRemark } = data
	const { html } = markdownRemark
	const isHome = true
	return (
		<Layout isHome={isHome}>
			<Article isHome={isHome} html={html} />
		</Layout>
	)
}

HomePage.propTypes = {
	data: PropTypes.object.isRequired
}

export const query = graphql`
  query HomePageQuery {
    markdownRemark(frontmatter: { path: { eq: "/home/" } }) {
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

export default HomePage