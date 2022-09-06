import React from 'react'
import PropTypes from 'prop-types'

// method1: use props as param, props.text to refer to prop val
// function Header(props) {
// method2: use curly brace and named prop <Header text='Hello World' />
function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, // bg
    color: textColor, // header font color
  }
  return (
    // css in js double curly braces
    // <header style={{backgroundColor: 'blue', color: 'red'}}>
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Tiny',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}
// if we use typescript, no need for this
Header.prototypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}
export default Header
