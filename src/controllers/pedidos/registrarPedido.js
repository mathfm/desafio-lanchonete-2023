import { validarPedido } from "./validarPedido.js";

export function registrarPedido(pagamento, ...pedidoDoCliente) {
    return validarPedido(pagamento, pedidoDoCliente);
}



