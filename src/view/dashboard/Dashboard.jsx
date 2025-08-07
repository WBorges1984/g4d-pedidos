import { useNavigate } from "react-router-dom";
import BasicPie from "./components/Graficos/BasicPie.jsx"
import { AnnualSalesChart } from "./components/Graficos/Charts.jsx";
import ButtonMenu from "./components/buttonMenu/ButtonMenu";
import CardDados from "./components/cardDados/CardDados";
import TabelaPedido from "./components/tabelaPedido/TabelaPedido.jsx";
// Importe o novo arquivo CSS
import "./dashboard.style.css";

import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

function Dashboard() {
const navigate = useNavigate();
  

function AbrirPagina(link){
navigate('/pedidos')
  }

  return (
    <div className="dashboard-container">
      <div
        className="MenuAsider"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "70%",
        }}
      >
        <h1>Dashboard</h1>

        <ButtonMenu text={"Dashboard"} iconDash active />
        <ButtonMenu text={"Pedidos"} iconPedido  onclick={AbrirPagina}/>
        <ButtonMenu text={"Clientes"} iconCliente />
        <ButtonMenu text={"Notificações"} iconNotific />
        <ButtonMenu text={"Mais"} iconMais />
      </div>

      <div className="conteudoDash">
        <h2 className="TitleGrafico">Vendas por Mês</h2>

        <div className="vendasDados">
          <CardDados text={"Recebimentos"} />
          <CardDados text={"Receb. Em Aberto"} />
          <CardDados text={"Pagamentos"} />
          <CardDados text={"Pagtos em aberto"} />
        </div>

        <div className="conteudoGraficos">
          <div className="dadosGrafico">
            <h2 className="TitleGrafico">Vendas por Mês</h2>
            <div className="cardDados">
              {/*  */}
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
            <div className="">
              <TabelaPedido />
            </div>
          </div>
         
      </div>
    </div>
  );
}

export default Dashboard;
