import './customButtom.style.css'

function CustomButtom({texto, onclick, color}) {
  return (
    <button type="button" className="custom-button" onClick={onclick} style={{ backgroundColor: color }}>
        <h3>{texto}</h3>
    </button>
  )
}

export default CustomButtom