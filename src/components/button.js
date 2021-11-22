import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Button = ({ btnTitle, enable }) => (
    <Btn enable={enable}>
        {btnTitle}
    </Btn>
 
)

Button.propTypes = {
    enable: PropTypes.bool,
    btnTitle: PropTypes.string,
}

export default Button

const Btn = styled.button`
width: 70px;
height: 40px;            
border: none;
border-radius: 50%;
background: ${({enable}) => (enable ? 'yellowgreen' : 'transparent')};
color: white;
font-family: sans-serif;
cursor: pointer;
`