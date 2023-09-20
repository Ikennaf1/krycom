class Exchanger
{
    constructor(exchanger)
    {
        this.name = '';
        this.base = 0;
        this.padding = 0;

        switch (exchanger) {
            case 'Coinbase':
                this.name = 'Coinbase';
                this.padding = 0;
                break;
            case 'Gemini':
                this.name = 'Gemini';
                this.base = 1 / 1000;
                this.padding = Math.floor(Math.random() * this.base);
                break;
            case 'Kucoin':
                this.name = 'Kucoin';
                this.base = 1.4 / 1000;
                this.padding = Math.floor(Math.random() * this.base);
                break;
            case 'AAX':
                this.name = 'AAX';
                this.base = 2.4 / 1000;
                this.padding = Math.floor(Math.random() * this.base);
                break;
            default:
                return;
        }
    }

    getName()
    {
        return this.name;
    }

    async get(symbolOne, symbolTwo)
    {
        let result = {
            buy: 0,
            sell: 0
        };

        const buyAmount = await fetch(`https://api.coinbase.com/v2/prices/${symbolOne}-${symbolTwo}/buy`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    let errMsg = "Not available";
                    return { data: {amount: errMsg } };
                }
            });
        const sellAmount = await fetch(`https://api.coinbase.com/v2/prices/${symbolOne}-${symbolTwo}/sell`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    let errMsg = "Not available";
                    return { data: {amount: errMsg } };
                }
            });
        
        result.buy = await buyAmount.data.amount;
        result.sell = await sellAmount.data.amount;

        let rand = Math.floor(Math.random() * 10);
        
        if (rand % 2 == 0) {
            result.buy -= (this.padding);
            result.sell -= (this.padding);
        } else {
            result.buy += (this.padding);
            result.sell += (this.padding);
        }
        
        return result;
    }
}

export default Exchanger;
