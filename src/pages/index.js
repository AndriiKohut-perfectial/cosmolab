import { graphql } from "gatsby"
import * as React from "react"
import Blog from "../components/blog"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SideBar from "../components/sidebar"

const IndexPage = (props) => (
  <Layout>
    <Seo title="Home" />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    > 
      <SideBar/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 0px 10px 20px",
        }}
      >
        {props.data.allPrismicBlogPost.edges.map(bloglist => (
          //console.log(bloglist)
          <Blog
          blogTitle={bloglist.node.data.post_title.text}
          blogText={bloglist.node.data.blog_text.text}
          blogImg={bloglist.node.data.post_picture.url}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const BlogQuery = graphql`
query BlogQuery {
  allPrismicBlogPost {
    edges {
      node {
        data {
          blog_text {
            text
          }
          post_picture {
            url
          }
          post_title {
            text
          }
        }
      }
    }
  }
}
`
