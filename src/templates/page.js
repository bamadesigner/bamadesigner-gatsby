import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"

import("../scss/styles.scss")

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
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