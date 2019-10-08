import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>Page Not Found</h1>
    <p>Uh-oh. This page seems to be missing. Please check to make sure the link you requested was entered correctly. If you can\'t find what you're looking for, <Link to="/contact/">let me know</Link></p>
  </Layout>
)

export default NotFoundPage
