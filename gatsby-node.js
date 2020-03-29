const path = require("path")
const { existsSync } = require("fs")

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions

	const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `)

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild("Error while running GraphQL query.")
		return
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		let template

		if (node.frontmatter.template) {
			let templateFile = "src/templates/" + node.frontmatter.template + ".js"
			if (existsSync(templateFile)) {
				template = path.resolve(templateFile)
			}
		}

		if (!template) {
			template = path.resolve("src/templates/page.js")
		}

		createPage({
			path: node.frontmatter.path,
			component: template,
			context: {}, // additional data can be passed via context
		})
	})
}

const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === "MarkdownRemark") {
		const slug = createFilePath({ node, getNode, basePath: "pages" })
		createNodeField({
			node,
			name: "slug",
			value: slug,
		})
	}
}
