import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"

const Blog = ({ blogTitle, blogText, blogImg }) => (
    <BlogWrap>
        <BlogImg>
            <img src={blogImg} alt='post_pic'/>
        </BlogImg>
        <div>
            <BlogTitle>{blogTitle}</BlogTitle>
            <BlogText>{blogText}</BlogText>
        </div>
    </BlogWrap>
)

Blog.propTypes = {
    blogTitle: PropTypes.string,
    blogText: PropTypes.string,
    blogImg: PropTypes.string,
  }

export default Blog

const BlogWrap = styled.div`
background: cadetblue;
padding: 20px;
margin: 10px 0;
`
const BlogImg = styled.div`
width: 300px;
margin-right: 20px;
float: left;
`

const BlogTitle = styled.div`
color: white;
font-family: sans-serif;
margin-bottom: 20px;
font-size: xx-large;
text-transform: uppercase;
text-align: end;
`

const BlogText = styled.div`
color: white;
font-family: sans-serif;
`