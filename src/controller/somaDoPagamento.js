export function somaDoPedido([...pedidoComValorFinal]) {
    const somaTotal = pedidoComValorFinal.reduce((acc, itens) => {
        return acc + (Number(itens.quantidade)) * (Number(itens.valor));
    }, 0);
    return somaTotal;
}