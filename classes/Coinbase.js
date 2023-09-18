// import Exchanger from './Exchanger.js';

class Coinbase
{
    constructor()
    {
        this.buyApi = 'https://api.coinbase.com/v2/prices/:currency_pair/buy';
        this.sellApi = 'https://api.coinbase.com/v2/prices/:currency_pair/sell';
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
            buy     : "",
            sell    : ""
        }

        const buyAmount = await fetch(this.getBuyApi(symbolOne, symbolTwo))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            });
        result.buy = await buyAmount.data.amount;

        const sellAmount = await fetch(this.getSellApi(symbolOne, symbolTwo))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            });
        result.sell = await sellAmount.data.amount;

        return result;
    }
}

export default Coinbase;

// let coinBase = new Coinbase();
// console.log(coinBase.concatenateCoinSymbols('USD', 'BTC'));
// console.log(coinBase.get('USD', 'BTC'));
