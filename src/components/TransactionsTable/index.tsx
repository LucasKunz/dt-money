import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
      .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000</td>
            <td>Moradia</td>
            <td>05/02/2021</td>
          </tr>
          <tr>
            <td>Restaurante Grill</td>
            <td className="withdraw">- R$60,00</td>
            <td>Alimentação</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>Rendimentos FIIs</td>
            <td className="deposit">R$12.000</td>
            <td>Investimentos</td>
            <td>15/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
