
var suggestions = [];
var finalSuggests = [];
let lowBuy = 1000000000;
let highSell = 0;
let lowBuyExchanger = '';
let highSellExchanger= '';

const setLocal = (key, value) => {
window.localStorage.setItem(key, value);
}
const getLocal = (key) => {
return window.localStorage.getItem(key);
}
const appendToLocal = (key, value) => {
let values = [];
if (getLocal(key) != null) {
    values = JSON.parse(getLocal(key));
}
values.push(value);
setLocal(key, JSON.stringify(values));
}
const removeLocal = (...keys) => {
keys.map((key) => {
    window.localStorage.removeItem(key);
});        
}

// window.localStorage.clear();

if (
        getLocal('bases') == null
        || getLocal('currencies') == null
        || getLocal('exchangers') == null
    ) {
    setLocal('bases', JSON.stringify(['BTC', 'ETH']));
    setLocal('currencies', JSON.stringify(['USD', 'ETH', 'BTC', 'LTC']));
    setLocal('exchangers', JSON.stringify(['Gemini', 'Coinbase', 'Kucoin']));
    setLocal('lowBuy', 1000000000);
    setLocal('highSell', 0);
}

var bases = JSON.parse(getLocal('bases'));
var currencies = JSON.parse(getLocal('currencies'));
var exchangers = JSON.parse(getLocal('exchangers'));

bases.map(async (base) => {
    await currencies.filter((currency) => base != currency)
        .map(async (currency) => {
            let suggestion = {
                'lowBuy': 1000000000,
                'highSell': 0
            };
            suggestion.baseCurrency = `${base}-${currency}`;
            await exchangers.map(async (exchanger) => {
                exchanger = new Exchanger(exchanger);
                let prices = {};
                prices =  await exchanger.get(base, currency);
                if (parseFloat(prices.buy) < suggestion.lowBuy) {
                    suggestion.lowBuy = parseFloat(prices.buy);
                    suggestion.buyExchanger = await exchanger.getName();
                    setLocal('lowBuy', parseFloat(prices.buy));
                    lowBuy = prices.buy;
                    lowBuyExchanger = exchanger.name;
                }
                if (parseFloat(prices.sell) > suggestion.highSell) {
                    suggestion.highSell = parseFloat(prices.sell);
                    suggestion.sellExchanger = await exchanger.getName();
                    setLocal('highSell', parseFloat(prices.sell));
                    highSell = prices.sell;
                    highSellExchanger = exchanger.getName();
                }
            });

            suggestions = [...suggestions, suggestion];
            // appendToLocal('suggestions', suggestion);
        });
});
