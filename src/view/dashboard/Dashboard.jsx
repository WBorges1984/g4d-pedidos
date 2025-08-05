import { AnnualSalesChart } from "./Charts";
import SalesValueChart from "./SalesValueChart";
// Importe o novo arquivo CSS
import "./dashboard.style.css"; 

function Dashboard() {
  return (
    // Usa a classe .dashboard-container
    <div className="dashboard-container">
      {/* Usa a classe .dashboard-content */}
      <div className="dashboard-content">
        {/* Usa a classe .dashboard-title */}
        <h1 className="dashboard-title">
          Gráfico de Vendas Anuais
        </h1>
        
        {/* Usa a classe .dashboard-card */}
        <div className="dashboard-card">
          {/* Usa a classe .card-title */}
          <h2 className="card-title">
            Vendas por Mês
          </h2>
          <AnnualSalesChart />
        </div>
        
        {/* Usa as classes .dashboard-card e .margin-top-large */}
        <div className="dashboard-card margin-top-large">
          <h2 className="card-title">
            Vendas Customizadas
          </h2>
          <AnnualSalesChart 
            data={[35, 42, 28, 55, 68, 38, 48, 42, 65, 29, 48, 38]}
            backgroundColor="#3B82F6"
            height="300px"
          />
          <SalesValueChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;