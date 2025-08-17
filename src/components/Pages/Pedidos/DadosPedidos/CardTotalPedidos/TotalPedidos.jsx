import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { DadosGraficosTotalPedidos } from './DadosGraficosTotalPedidos';

import './totalPedidos.style.css'


function CardTotalPedidos({text, ValorNum}) {
  return (
    <div className="cardDadosDashboard">
      <div className="iconVenda">
        <ShoppingCartSharpIcon />
      </div>
      <div className="dados">
        <h4>{text || 'Venda'}</h4>
        <h3>{ValorNum || '0,00'}</h3>
      </div>
      <DadosGraficosTotalPedidos />
    </div>
  );
}

export default CardTotalPedidos;