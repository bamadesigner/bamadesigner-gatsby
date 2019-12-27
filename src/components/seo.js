/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { withPrefix, useStaticQuery, graphql } from "gatsby"

import ogImage from "../images/rachel-cherry-social.png"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            shortTitle
            description
            authorTwitter
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  if (!title) {
    title = site.siteMetadata.title
  } else {
    title += ` - ${site.siteMetadata.shortTitle}`
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      //titleTemplate={`%s - ${site.siteMetadata.shortTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:image:alt`,
          content: `A close up of Rachel's face, looking mischievous.`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@` + site.siteMetadata.authorTwitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage,
        },
      ].concat(meta)}
    >
      <script src={withPrefix('js/bamadesigner.js')} type="text/javascript" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en-US`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
