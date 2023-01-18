import './style.scss'
import PropTypes from 'prop-types'


const STYLES = [
    'primary--outline',
    'normal--outline',
    'primary--solid',
    'normal--solid',
    
]

const SIZES = ['btn--medium', 'btn--small']
function Button({
    children,
    style,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    className
}) {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0]

     const checkButtonSize = SIZES.includes(buttonSize) 
     ? buttonSize
     : SIZES[0]
    return(
        <button className={`btn ${className} ${buttonStyle} ${checkButtonSize}`} style={style} onClick={onClick} type={type}>{children} </button>
    )
}

Button.propTypes = {
    buttonStyle: PropTypes.string.isRequired
}

export default Button