import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onclick }) => {
    return (
        // onclick接收header传入的信息
        <button style={{ backgroundColor: color }} onClick={onclick} className='btn'>{text}</button>
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
    onClick: PropTypes.func,
}

export default Button
