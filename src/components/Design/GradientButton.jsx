const GradientButton = ({name}) => {

    return  <button className={`btn gradient-border-button ${name == 'SIGN IN' && 'text-dark-mob'}`}>{name}</button>
}

export default GradientButton;