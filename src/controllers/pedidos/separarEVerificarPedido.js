export function separarPedidoEVerificarPedido(...pedidoCliente) {
    const pedidoFiltrado = [];
    pedidoCliente.forEach(item => {
        item.map(i => {
            const [name, quantidade] = i.split(",", 2);
            const pedido = {
                codigo: name,
                quantidade: quantidade
            }
            pedidoFiltrado.push(pedido)
        })
    });
    
    const pedidoAdicionalSanduiche = pedidoFiltrado.some(item => item.codigo == "queijo");
    const pedidoAdicionalCafe = pedidoFiltrado.some(item => item.codigo == "chantily");
    const pedidoPrincipalCafe = pedidoFiltrado.some(item => item.codigo == "cafe");
    const pedidoPrincipalSanduiche = pedidoFiltrado.some(item => item.codigo == "sanduiche");

    if ((pedidoAdicionalSanduiche && !pedidoPrincipalSanduiche) || (pedidoAdicionalCafe && !pedidoPrincipalCafe)) {
        return 0;
    } 
    
    return pedidoFiltrado;
}