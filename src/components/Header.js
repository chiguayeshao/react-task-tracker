//倒入PropTypes
import PropTypes from 'prop-types'

//参数传递title
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

//设置title默认值
Header.defaultProps = {
    title: 'Task Tracker',
}

//设置title属性，以及isRequired
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
