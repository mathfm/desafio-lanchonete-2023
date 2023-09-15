import { Pagamento } from "../formas-de-pagamento/pagamento.js";
import { Cardapio } from "./Cardapio.js";


const cardapio = new Cardapio();
const pagamento = new Pagamento("boleto", 15.5);
console.log(pagamento.total);