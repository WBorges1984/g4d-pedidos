import React from 'react'
import MenuLateral from '../../components/MenuLateral/MenuLateral'

import './pedidos.style.css'

function Pedidos() {
  return (
    <div className='container-pedidos'>
      <div>
        <MenuLateral titulo={'Pedidos'}/>
      </div>
      <div className="conteudoDash">
        <h2 className="TitleGrafico">Vendas por Mês</h2>

        <div className="vendasDados">
          DFG
        </div>

        <div className="conteudoGraficos">
          <div className="dadosGrafico">
            <h2 className="TitleGrafico">Vendas por Mês</h2>
            <div className="cardDados">
              {/*  */}
             DFG
            </div>
          </div>

          <div className="dadosGrafico">
            <h2 className="TitleGrafico">Vendas Customizadas</h2>
            <div className="cardDados">
              <h1>dfgdfg</h1>
            </div>
          </div>
        </div>
          
            
          <div className="tabelaPedido">
            <div className="">
              SDFSDF
            </div>
          </div>
         
      </div>

    </div>
  )
}

export default Pedidos