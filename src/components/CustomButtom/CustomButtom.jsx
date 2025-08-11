import './customButtom.style.css'

function CustomButtom({texto, onclick}) {
  return (
    <button type="button" className="custom-button" onClick={onclick}>
        <h3>{texto}</h3>
    </button>
  )
}

export default CustomButtom