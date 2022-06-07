import React from 'react'
import { Link } from 'react-router-dom'
import { StylesFooter } from '../styles/StylesGlobal'

const TimeFooter = () => {
  return (
    <StylesFooter>
        <div>
        <Link to={'/'}><i className='fa-brands fa-facebook-square'></i></Link>
        <Link to={'/'}><i className='fa-brands fa-pinterest'></i></Link>
        <Link to={'/'}><i className='fa-brands fa-instagram'></i></Link>
        </div>
    </StylesFooter>
  )
}

export default TimeFooter