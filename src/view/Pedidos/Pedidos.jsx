import MenuLateral from "../../components/MenuLateral/MenuLateral";

import "./pedidos.style.css";
import CustomButtom from "../../components/CustomButtom/CustomButtom";
import TotalPedidos from "./Graficos/TotalPedidos";

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
        <div className="GraficosPedidos">
          <div className="TotalPedidos">
            <h4>Total Pedidos</h4>
            <h3>1.365</h3>
            <TotalPedidos />
          </div>
          <div className="TotalPedidos">
            <h4>Receita Total</h4>
            <h3>1.365</h3>
            <TotalPedidos />
          </div>
          <div className="TotalPedidos">
            <h4>Pedidos Pendentes</h4>
            <h3>1.365</h3>
            <TotalPedidos />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pedidos;
