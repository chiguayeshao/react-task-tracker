//导入PropTypes
import PropTypes from 'prop-types'
import Button from './Button'

//参数传递title
const Header = ({ title }) => {

    const fuckClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* 调用button，给button赋值 */}
            {/* 将onclick传入buttton */}
            <Button color='green' text='Add' onclick={fuckClick} />
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
