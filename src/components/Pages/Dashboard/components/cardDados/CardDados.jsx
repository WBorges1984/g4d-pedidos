import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import './cardDados.style.css'


function CardDados({text}) {
  return (
    <div className="cardDadosDashboard">
      <div className="iconVenda">
        <ShoppingCartSharpIcon />
      </div>
      <div className="dados">
        <h4>{text || 'Venda'}</h4>
        <h3>R$ 15.253,20</h3>
      </div>
    </div>
  );
}

export default CardDados;
