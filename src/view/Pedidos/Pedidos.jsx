import MenuLateral from "../../components/MenuLateral/MenuLateral";

import "./pedidos.style.css";
import CustomButtom from "../../components/CustomButtom/CustomButtom";

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

      </div>
    </div>
  );
}

export default Pedidos;
