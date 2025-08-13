import BasicPie from "./components/Graficos/BasicPie.jsx"
import { AnnualSalesChart } from "./components/Graficos/Charts.jsx";
import CardDados from "./components/cardDados/CardDados";
import TabelaPedido from "./components/tabelaPedido/TabelaPedido.jsx";
// Importe o novo arquivo CSS
import "./dashboard.style.css";

import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx";

function Dashboard() {


  return (
    <div className="dashboard-container">
    <MenuLateral titulo={'Dashboard'}/>

       <div className="conteudoDash">
        <h2 className="TitleGrafico">Vendas por Mês</h2>

        <div className="vendasDadosDash">
          <CardDados text={"Recebimentos"} />
          <CardDados text={"Receb. Em Aberto"} />
          <CardDados text={"Pagamentos"} />
          <CardDados text={"Pagtos em aberto"} />
        </div>

        <div className="conteudoGraficos">
          <div className="dadosGrafico">
            <h2 className="TitleGrafico">Vendas por Mês</h2>
            <div className="cardDados">
              <AnnualSalesChart />
            </div>
          </div>

          <div className="dadosGrafico">
            <h2 className="TitleGrafico">Vendas Customizadas</h2>
            <div className="cardDados">
              <BasicPie />
            </div>
          </div>
        </div>
          
            
          <div className="tabelaPedido">
              <TabelaPedido />
          </div>
         
      </div> 
    </div>
  );
}

export default Dashboard;
