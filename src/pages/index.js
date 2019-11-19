import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"

import("../scss/styles.scss")

const HomePage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const isHome = true
  return (
    <Layout isHome={isHome}>
      <Article isHome={isHome} html={html} />
    </Layout>
  )
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