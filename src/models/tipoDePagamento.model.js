export class TipoDePagamento {

    constructor(typePayment, value) {
        this.typePayment = typePayment;
        this.value = value;
    }

    getValue() {
        switch (this.typePayment) {
            case "dinheiro":
                return this.value - (this.value * 0.05);
            
            case "credito":
                return this.value + (this.value * 0.03);
            
            case "debito":
                return this.value;
            
            default:
                return 0;
        }
    }
}