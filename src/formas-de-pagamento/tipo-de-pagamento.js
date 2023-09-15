export class TipoDoPagamento {

    constructor(typePayment, value) {
        this.typePayment = typePayment;
        this.value = value;
        
    }

    getValue() {
        if (this.typePayment == "dinheiro") {
            return this.value - (this.value * 0.5);
        } else if (this.typePayment == "credito") {
            return this.value + (this.value * 0.03);
        } else if (this.typePayment == "debito") {
            return this.value;
        } else {
            return -1;
        }
    }

}