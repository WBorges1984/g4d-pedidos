import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

import './CardReceitaTotal.style.css'
import { DadosGraficosReceitaTotal } from './DadosGraficosReceitaTotal';


function CardReceitaTotal({text, ValorNum}) {
  return (
    <div className="cardDadosDashboard">
      <div className="iconVenda">
        <ShoppingCartSharpIcon />
      </div>
      <div className="dados">
        <h4>{text || 'Venda'}</h4>
        <h3>{ValorNum || '0,00'}</h3>
      </div>
      <DadosGraficosReceitaTotal />
    </div>
  );
}

export default CardReceitaTotal;