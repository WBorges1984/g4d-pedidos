import Button from '@mui/material/Button';
import './buttonMenu.Style.css'

//icons
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';


function ButtonMenu({onclick, text, iconDash, iconPedido, iconCliente, iconNotific, iconMais, active  }) {
  return (
    <Button onClick={onclick} color='info' size='medium' variant={active ? "contained" : "outlined"}>
      {iconDash ? <DashboardSharpIcon /> : 
        iconPedido ?  <ListAltSharpIcon /> :
        iconCliente ? <PeopleSharpIcon /> :
        iconNotific ? <NotificationsSharpIcon />:
        iconMais ? <MoreHorizSharpIcon /> :''} 
      <span style={{paddingLeft: 10, color: 'white'}}>  {text}</span>
    </Button>
  )
}

export default ButtonMenu