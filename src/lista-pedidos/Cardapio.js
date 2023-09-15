import { Item } from "./item-do-cardapio.js"
export class Cardapio {
    constructor() {
        this.itens = [
            new Item("cafe", "Café", "R$ 3,00"),
            new Item("chantily", "Chantily (extra do Café)", "R$ 1,50"),
            new Item("suco", "Suco Natural", "R$ 1,50"),
            new Item("sanduiche", "Sanduíche", "R$ 6,20"),
            new Item("queijo", "Queijo (extra do Sanduiíche)", "R$ 2,00"),
            new Item("salgado", "Salgado", "R$ 7,25"),
            new Item("combo1", "1 Suco e 1 Sanduíche", "R$ 9,50"),
            new Item("combo2", "1 Café e 1 Sanduíche", "R$ 7,50")
        ]
    }
}