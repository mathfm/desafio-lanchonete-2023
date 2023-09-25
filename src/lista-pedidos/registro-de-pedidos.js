export class registroPedidos {
    constructor(...pedidoCliente) {
        this.pedidosDoCliente = pedidoCliente;
        this.pedidoFiltrado = this.valorQuantia();
    }

    valorQuantia() {
        return this.pedidosDoCliente.reduce((acc, e) => {
            const [pedido, quantia] = e.split(",", 2);
            acc[pedido] = quantia;
            return acc;
        }, {});
    }
}