class Exchanger
{
    constructor(exchanger)
    {
        return new exchanger;
    }
}

///


class Symbol
{
    constructor(symbol)
    {
        this.padding = 0;
        // fetch coinbase api here instead
        this.basePrice = {
            buy: 0,
            sell: 0
        };
        return new symbol;
    }
    
    get()
    {
        let basePrice = this.basePrice;
        let amount = {
            buy: 0,
            sell: 0
        };
        let rand = Math.floor(Math.random() * 10);
        
        if (rand % 2 == 0) {
            amount.buy = (basePrice.buy) - (this.padding);
            amount.sell = (basePrice.sell) - (this.padding);
        } else {
            amount.buy = (this.basePrice.buy) + (this.padding);
            amount.sell = (basePrice.sell) + (this.padding);
        }
        
        return amount;
    }
}

///


class Coinbase extends Symbol
{
    constructor()
    {
        super();
        this.padding = 0;
    }
}

