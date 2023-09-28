import { registrarPedido } from "../controllers/registrarPedido.js";


class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        return registrarPedido(metodoDePagamento, itens);
    }

}



export { CaixaDaLanchonete };
