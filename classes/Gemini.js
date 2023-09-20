// import Exchanger from './Exchanger.js';

class Gemini
{
    constructor()
    {
        this.name       = 'Gemini';
        this.buyApi     = 'https://api.gemini.com/v1/pubticker/:currency_pair';
        this.sellApi    = 'https://api.gemini.com/v1/pubticker/:currency_pair';
        this.api        = 'https://api.gemini.com/v1/pubticker/:currency_pair';
    }

    getName()
    {
        return this.name;
    }

    concatenateCoinSymbols(symbolOne, symbolTwo)
    {
        return `${symbolOne.toLowerCase()}${symbolTwo.toLowerCase()}`;
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

    getApi (symbolOne, symbolTwo)
    {
        let api = this.api;
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

        const amounts = await fetch(this.getApi(symbolOne, symbolTwo))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    let errMsg = "Not available";
                    return { bid: errMsg, ask: errMsg };
                }
            });

        result.buy = await amounts.bid;
        result.sell = await amounts.ask;

        return result;
    }
}

export default Gemini;
