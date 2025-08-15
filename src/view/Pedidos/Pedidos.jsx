import MenuLateral from "../../components/MenuLateral/MenuLateral";

import "./pedidos.style.css";
import CustomButtom from "../../components/CustomButtom/CustomButtom.jsx";
import TotalPedidos from "../../components/Pages/Pedidos/DadosPedidos/TotalPedidos.jsx";
import CardDadosPedidos from "../../components/Pages/Pedidos/DadosPedidos/TotalPedidos.jsx";
import TabelaPedidos from "../../components/Pages/Pedidos/TabelaPedidos/TabelaPedidos.jsx";

function Pedidos() {
  return (
    <div className="container-pedidos">
      <div>
        <MenuLateral titulo={"Pedidos"} />
      </div>
      <div className="conteudoPedidos">
        <div className="topPedidos">
          <h2 className="TitlePedidos">Análise de Pedidos</h2>
          <CustomButtom texto={'+ Pedido'}/>
        </div>
        <div className="pesquisaPedidos">
          <input className="" placeholder="Pesquisar pedidos..." type="text"/>
          <CustomButtom texto={'Buscar'}/>
        </div>
        <div className="DadosPedidos">
          <div className="TotalPedidos">
            <CardDadosPedidos text={'Total Pedidos'} ValorNum={'1.365'}/>
          </div>
          <div className="TotalPedidos">
            <CardDadosPedidos text={'Receita Total'} ValorNum={'15.253,20'}/>
          </div>
          <div className="TotalPedidos">
            <CardDadosPedidos text={'Pedidos Pendentes'} ValorNum={'250'}/>
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
