import { TipoDePagamento } from "./tipoDePagamento.model.js";

export class Pagamento {
    #pagamento;
    #valor
    #desconto;
    constructor(pagamento, valor) {
        this.#pagamento = pagamento;
        this.#valor = valor;
        this.#desconto = new TipoDePagamento(this.#pagamento, this.#valor);
        this.total = this.validarPagamento();
    }

    validarPagamento() {
        if (typeof this.#desconto.getValue() && this.#desconto.getValue() > 0) {
            return "R$ " + (String(this.#desconto.getValue().toFixed(2)).replace(".", ","));
        } else {
            return "Forma de pagamento inválida!";
        }
    }
} 