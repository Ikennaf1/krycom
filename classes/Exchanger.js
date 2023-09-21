class Exchanger
{
    constructor(exchanger)
    {
        this.name = '';

        switch (exchanger) {
            case 'Coinbase':
                this.name = 'Coinbase';
                this.base = 0;
                break;
            case 'Gemini':
                this.name = 'Gemini';
                this.base = 1 / 1000;
                break;
            case 'Kucoin':
                this.name = 'Kucoin';
                this.base = 1.4 / 1000;
                break;
            case 'AAX':
                this.name = 'AAX';
                this.base = 2.4 / 1000;
                break;
            case 'Ascendex':
                this.name = 'Ascendex';
                this.base = 1.34 / 1000;
                break;
            case 'Bigone':
                this.name = 'Bigone';
                this.base = 1.84 / 1000;
                break;
            case 'Biquant':
                this.name = 'Biquant';
                this.base = 1.32 / 1000;
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
            result.buy -= (this.base);
            result.sell -= (this.base);
        } else {
            result.buy += (this.base);
            result.sell += (this.base);
        }
        
        return result;
    }
}

export default Exchanger;
