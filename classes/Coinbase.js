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
        return `${symbolOne}-${symbolTwo}`;
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
}

export default Coinbase;

// let coinBase = new Coinbase();
// console.log(coinBase.concatenateCoinSymbols('USD', 'BTC'));
// console.log(coinBase.getSellApi('USD', 'BTC'));
