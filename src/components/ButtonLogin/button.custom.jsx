import './button.custom.style.css'

function ButtonCustom({texto, onclick}) {
  return (
    <button type="button" className="login-button" onClick={onclick}>
        {texto}
    </button>
  )
}

export default ButtonCustom