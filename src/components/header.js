import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "./Button"

const Header = ({ siteTitle, headerLogo }) => (
  <HeaderWrap>
    <HeaderLogoWrap>
      <HeaderLogoImg src={headerLogo} alt="our logo"/>
      <HeaderTitle>
        <HeaderLink to="/" >
          {siteTitle}
        </HeaderLink>
      </HeaderTitle>
    </HeaderLogoWrap>
    <div>
      <Button 
        btnTitle={'UA'}
        enable={false}
        />
      <Button
        btnTitle={'ENG'}
        enable={true}
      />
    </div>
  </HeaderWrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerLogo: PropTypes.string,
}

export default Header

const HeaderTitle = styled.h1`
  margin: 0; 
`
const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 75px;
  align-items: center;
  background: rebeccapurple;
`
const HeaderLogoWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`
const HeaderLogoImg = styled.img`
  margin-right: 20px;
`