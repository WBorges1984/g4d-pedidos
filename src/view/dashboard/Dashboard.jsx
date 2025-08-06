import { AnnualSalesChart } from "./Charts";
import SalesValueChart from "./SalesValueChart";
import ButtonMenu from "./components/buttonMenu/ButtonMenu";
import CardDados from "./components/cardDados/CardDados";
// Importe o novo arquivo CSS
import "./dashboard.style.css";

import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="MenuAsider" style={{display:'flex', flexDirection:'column', gap: 10, width: '70%'}}>
        <h1>Dashboard</h1>
        
        <ButtonMenu text={'Dashboard'} iconDash active/>
        <ButtonMenu text={'Pedidos'} iconPedido/>
        <ButtonMenu text={'Clientes'} iconCliente/>
        <ButtonMenu text={'Notificações'} iconNotific/>
        <ButtonMenu text={'Mais'} iconMais/>
      </div>

        
      <div className="conteudoDash">

        <div className="vendasDados">
          <CardDados />
          <CardDados />
          <CardDados />
          <CardDados />
          
        </div>

        <div className="conteudoGraficos">
          <div className="cardDados">
            <h2 className="">Vendas por Mês</h2>
            <AnnualSalesChart />
          </div>

          <div className="cardDados">
            <h2 className="">Vendas Customizadas</h2>
            <AnnualSalesChart data={[35, 42, 28, 55, 68, 38, 48, 42, 65, 29, 48, 38]} backgroundColor="#3B82F6" height="300px" />
          </div>
          <div className="cardDados">
            <h2 className="">Vendas Customizadas</h2>
            <SalesValueChart />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
