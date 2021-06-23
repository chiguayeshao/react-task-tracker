import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

//默认背景色
Button.defaultProps = {
    color: 'steelblue',
}

//传入string
Button.prototype = {
    test: PropTypes.string,
    color: PropTypes.string,
}

export default Button
