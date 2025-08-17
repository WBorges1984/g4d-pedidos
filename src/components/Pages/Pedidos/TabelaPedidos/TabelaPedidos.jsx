import "./tabelaPedidos.style.css";
import dados from "./dadosTabelaMock.json";

export const TabelaPedidos = () => {
  return (
    <table class="tablePedido">
      <thead>
        <tr className="trTheadPedido">
          <th scope="col">Pedido</th>
          <th scope="col">Cliente</th>
          <th scope="col">Data</th>
          <th scope="col">Valor</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody className="bodyTable">
        {dados.map((item) => {
          return (           
            <tr className="trPedido">
              <td>#{item.nrpedido}</td>
              <td>{item.cliente}</td>
              <td>{item.data}</td>
              <td>R${item.valor}</td>
              <td>{item.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
