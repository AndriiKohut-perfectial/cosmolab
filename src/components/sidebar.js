import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const SideBar = () => (
  <SideBarWrap>
        <SideBarLink to="/doctors" >
          Doctors
        </SideBarLink>
        <SideBarLink to="/process" >
          Process
        </SideBarLink>
        <SideBarLink to="/about" >
          About
        </SideBarLink>
  </SideBarWrap>
)

SideBar.propTypes = {
    sideBarTitle: PropTypes.string,
    headerLogo: PropTypes.string,
}

export default SideBar

const SideBarWrap = styled.nav`
  background-color: red;
  max-width: 250px;
  min-height: 100%;
  position: sticky;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
`
const SideBarLink = styled(Link)`
    color: white;
    margin-bottom: 25px;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 600;
    font-size: x-large;
`
