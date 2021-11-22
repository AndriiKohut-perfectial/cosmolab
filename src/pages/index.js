import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SideBar from "../components/sidebar"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <SideBar/>
  </Layout>
)

export default IndexPage
