import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
// ou
import EventNoteIcon from '@mui/icons-material/EventNote';
import './cardDados.style.css'


function CardDados({text}) {
  return (
    <div className="cardDadosDashboard">
      <div className="iconVenda">
        <PendingActionsIcon />
        {/* <AttachMoneyIcon /> */}
        {/* <ShoppingCartSharpIcon /> */}
      </div>
      <div className="dados">
        <h4>{text}</h4>
        <h3>R$ 15.253,20</h3>
      </div>
    </div>
  );
}

export default CardDados;
