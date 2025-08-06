import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import './cardDados.style.css'


function CardDados() {
  return (
    <div className="cardDadosDashboard">
      <div className="iconVenda">
        <ShoppingCartSharpIcon />
      </div>
      <div className="dados">
        <h4>Vendas Totais</h4>
        <h3>R$ 15.253,20</h3>
      </div>
    </div>
  );
}

export default CardDados;
