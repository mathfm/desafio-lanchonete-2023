import { Cardapio } from "../models/cardapio.model.js";
import { Pagamento } from "../models/pagamento.model.js";
import { somaDoPedido } from "./somaDoPagamento.js";

export function calcularPedido(pagamento, pedidoSemValorDosItens) {
    const cardapio = new Cardapio();
    const pedidosComValores = pedidoSemValorDosItens;
    
    for (const key in pedidosComValores) {
        if (cardapio.produtos.find(item => item.name == pedidosComValores[key].codigo)) {
            pedidosComValores[key].valor = cardapio.produtos.
                find(item => item.name == pedidosComValores[key].codigo).value
                .substring(3).replace(",", ".");
        }
    }
    const valorDoPedidoSemTaxas = somaDoPedido(pedidosComValores)
    const valorFinalComTaxa = new Pagamento(pagamento, valorDoPedidoSemTaxas)
    return valorFinalComTaxa.total;
}