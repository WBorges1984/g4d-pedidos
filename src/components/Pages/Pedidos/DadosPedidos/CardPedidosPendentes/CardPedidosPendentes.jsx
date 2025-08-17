import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

import './CardPedidosPendentes.style.css'
import { DadosGraficosPedidosPendentes} from './DadosGraficosPedidosPendentes';


function CardPedidosPendentes({text, ValorNum}) {
  return (
    <div className="cardDadosDashboard">
      <div className="iconVenda">
        <ShoppingCartSharpIcon />
      </div>
      <div className="dados">
        <h4>{text || 'Venda'}</h4>
        <h3>{ValorNum || '0,00'}</h3>
      </div>
      <DadosGraficosPedidosPendentes />
    </div>
  );
}

export default CardPedidosPendentes;