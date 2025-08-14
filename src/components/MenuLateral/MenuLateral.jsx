import ButtonMenu from '../Pages/Dashboard/components/buttonMenu/ButtonMenu.jsx'
import { useNavigate, useLocation } from 'react-router-dom';

import './menuLateral.style.css'

function MenuLateral({titulo}) {

  const navigate = useNavigate();
  const location = useLocation();
  
  const AbrirPagina = (link) => {
    navigate(`/${link}`);
  };

  // Função para verificar se o botão está ativo baseado na URL atual
  const isActive = (path) => {
    const currentPath = location.pathname.replace('/', '');
    return currentPath === path || (currentPath === '' && path === 'dashboard');
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
        <ButtonMenu 
          text={"Dashboard"} 
          iconDash 
          active={isActive('dashboard')} 
          onclick={()=>AbrirPagina('dashboard')}
        />
        <ButtonMenu 
          text={"Pedidos"} 
          iconPedido 
          active={isActive('pedidos')} 
          onclick={()=>AbrirPagina('pedidos')}
        />
        <ButtonMenu 
          text={"Clientes"} 
          iconCliente 
          active={isActive('clientes')} 
          onclick={()=>AbrirPagina('clientes')}
        />
        <ButtonMenu 
          text={"Notificações"} 
          iconNotific 
          active={isActive('notific')} 
          onclick={()=>AbrirPagina('notific')}
        />
        <ButtonMenu 
          text={"Mais"} 
          iconMais 
          active={isActive('mais')} 
          onclick={()=>AbrirPagina('mais')}
        />
      </div>
  )
}

export default MenuLateral