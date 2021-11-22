/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    prismicHeader {
      data {
        header_img {
          url
        }
        header_title {
          text
        }
      }
    }
  }
  `)

  return (
    <>
      <Header 
        siteTitle={data.prismicHeader.data.header_title.text || `Title`}
        headerLogo={data.prismicHeader.data.header_img.url}
      />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
