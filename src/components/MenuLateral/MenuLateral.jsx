import ButtonMenu from '../../view/Dashboard/components/buttonMenu/ButtonMenu'
import { useNavigate } from 'react-router-dom';

import './menuLateral.style.css'
import { useState } from 'react';

function MenuLateral({titulo}) {
  const[activeDash, SetactiveDash] = useState(true);
  const[activePedido, SetactivePedido] = useState('');
  
    const navigate = useNavigate();
  
const AbrirPagina = (link) => {
  {link === 'dashboard' ? SetactiveDash(true) : ''}

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
        {activeDash && <ButtonMenu text={"Dashboard"} iconDash active onclick={()=>AbrirPagina('dashboard')}/>}
        {!activeDash && <ButtonMenu text={"Dashboard"} iconDash  onclick={()=>AbrirPagina('dashboard')}/>}
        <ButtonMenu text={"Pedidos"} iconPedido  onclick={()=>AbrirPagina('pedidos')}/>
        <ButtonMenu text={"Clientes"} iconCliente onclick={()=>AbrirPagina('clientes')}/>
        <ButtonMenu text={"Notificações"} iconNotific onclick={()=>AbrirPagina('notific')}/>
        <ButtonMenu text={"Mais"} iconMais onclick={()=>AbrirPagina('mais')}/>
      </div>
  )
}

export default MenuLateral