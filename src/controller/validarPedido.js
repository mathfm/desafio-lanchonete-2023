import { Cardapio } from "../models/cardapio.model.js";
import { calcularPedido } from "./calcularPedido.js";
import { separarPedidoEVerificarPedido } from "./separarEVerificarPedido.js";

export function validarPedido(pagamento, [...pedido]) {
    const cardapio = new Cardapio();
    const pedidoCliente = separarPedidoEVerificarPedido(pedido);

    if (pedidoCliente.length == 0) {
        return "Não há itens no carrinho de compra!";
    } else if (!pedidoCliente) {
        return "Item extra não pode ser pedido sem o principal";
    }

    const itensDoCardapio = cardapio.produtos.map(item => item.name);
    const itensDoCliente = pedidoCliente.every(item => itensDoCardapio.includes(item.codigo));
    const verificarQuantidade = pedidoCliente.every(item => item.quantidade <= 0 ? 0 : 1);

    if (verificarQuantidade && itensDoCliente) {
        return calcularPedido(pagamento, pedidoCliente);
    } else if (!verificarQuantidade) { 
        return "Quantidade inválida!";;
    } else {
        return "Item inválido!";
    } 
    

    

    
}


