import { Pagamento } from "../formas-de-pagamento/pagamento.js";
import { Cardapio } from "./Cardapio.js";
import { registroPedidos } from "./registro-de-pedidos.js";

const cardapio = new Cardapio();
const pagamento = new Pagamento("credito", 15.5);
const pedido = new registroPedidos("cafe,1", "chantily,2", "hamburger,3");

console.log(pedido.pedidoFiltrado);
