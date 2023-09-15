import { TipoDoPagamento } from "./tipo-de-pagamento.js";

export class Pagamento {
    constructor(payment, value) {
        this.payment = payment;
        this.value = value;
        this.desconto = new TipoDoPagamento(this.payment, this.value);
        this.total = this.desconto.getValue(); 
    }
} /*

O resultado esperado deve ser:
```
9,50 + 6,00
"R$ 15,96"
```
*/ 