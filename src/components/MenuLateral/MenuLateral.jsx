import ButtonMenu from '../../view/Dashboard/components/buttonMenu/ButtonMenu'
import { useNavigate } from 'react-router-dom';

import './menuLateral.style.css'

function MenuLateral({titulo}) {

    const navigate = useNavigate();
  
const AbrirPagina = (link) => {
    navigate(`/${link}`);
  };


  return (
    <div
        className="MenuAsider"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "70%",
        }}
      >
        <h1>{titulo}</h1>

        <ButtonMenu text={"Dashboard"} iconDash active onclick={()=>AbrirPagina('dashboard')}/>
        <ButtonMenu text={"Pedidos"} iconPedido  onclick={()=>AbrirPagina('pedidos')}/>
        <ButtonMenu text={"Clientes"} iconCliente onclick={()=>AbrirPagina('clientes')}/>
        <ButtonMenu text={"Notificações"} iconNotific onclick={()=>AbrirPagina('notific')}/>
        <ButtonMenu text={"Mais"} iconMais onclick={()=>AbrirPagina('mais')}/>
      </div>
  )
}

export default MenuLateral