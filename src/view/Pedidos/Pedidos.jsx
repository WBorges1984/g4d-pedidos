import MenuLateral from "../../components/MenuLateral/MenuLateral";

import "./pedidos.style.css";
import CustomButtom from "../../components/CustomButtom/CustomButtom.jsx";
import CardTotalPedidos from "../../components/Pages/Pedidos/DadosPedidos/CardTotalPedidos/TotalPedidos.jsx";
import {TabelaPedidos} from "../../components/Pages/Pedidos/TabelaPedidos/TabelaPedidos.jsx";
import CardReceitaTotal from "../../components/Pages/Pedidos/DadosPedidos/CardReceitaTotal/CardReceitaTotal.jsx";
import CardPedidosPendentes from "../../components/Pages/Pedidos/DadosPedidos/CardPedidosPendentes/CardPedidosPendentes.jsx";

function Pedidos() {
  return (
    <div className="container-pedidos">
      <div>
        <MenuLateral titulo={"Pedidos"} />
      </div>
      <div className="conteudoPedidos">
        <div className="topPedidos">
          <h2 className="TitlePedidos">Análise de Pedidos</h2>
          <CustomButtom texto={'+ Pedido'} />
        </div>
        <div className="pesquisaPedidos">
          <input className="" placeholder="Pesquisar pedidos..." type="text"/>
          <CustomButtom texto={'Buscar'} color={'#046ebeff'} />
        </div>
        <div className="DadosPedidos">
          <div className="TotalPedidos">
            <CardTotalPedidos text={'Total Pedidos'} ValorNum={'1.365'}/>
          </div>
          <div className="TotalPedidos">
            <CardReceitaTotal text={'Receita Total'} ValorNum={'15.253,20'}/>
          </div>
          <div className="TotalPedidos">
            <CardPedidosPendentes text={'Pedidos Pendentes'} ValorNum={'250'}/>
          </div>
        </div>

        <div className="pedidosShow">
          <TabelaPedidos />
        </div>

      </div>
    </div>
  );
}

export default Pedidos;
