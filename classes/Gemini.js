// import Exchanger from './Exchanger.js';

class Gemini
{
    constructor()
    {
        this.name       = 'Coinbase';
        this.buyApi     = 'https://api.gemini.com/v1/pubticker/:currency';
        this.sellApi    = 'https://api.gemini.com/v1/pubticker/:currency';
    }

    getName()
    {
        return this.name;
    }

    concatenateCoinSymbols(symbolOne, symbolTwo)
    {
        return `${symbolOne.toUpperCase()}-${symbolTwo.toUpperCase()}`;
    }

    getBuyApi(symbolOne, symbolTwo)
    {
        let api = this.buyApi;
        api = api.replace(
            ":currency_pair",
            this.concatenateCoinSymbols(symbolOne, symbolTwo)
        );
        return api;
    }

    getSellApi(symbolOne, symbolTwo)
    {
        let api = this.sellApi;
        api = api.replace(
            ":currency_pair",
            this.concatenateCoinSymbols(symbolOne, symbolTwo)
        );
        return api;
    }

    async get(symbolOne, symbolTwo)
    {
        let result = {
            buy     : 0,
            sell    : 0
        };

        const buyAmount = await fetch(this.getBuyApi(symbolOne, symbolTwo))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            });

        const sellAmount = await fetch(this.getSellApi(symbolOne, symbolTwo))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            });

        result.buy = await buyAmount.data.amount;
        result.sell = await sellAmount.data.amount;

        return result;
    }
}

export default Coinbase;

// let coinBase = new Coinbase();
// console.log(coinBase.concatenateCoinSymbols('USD', 'BTC'));
// console.log(coinBase.get('USD', 'BTC'));
