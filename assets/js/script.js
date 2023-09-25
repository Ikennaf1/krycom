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

var showNav = false;
var showCoins = false;
var showExchangers = false;
var label_nav_collapsed = document.querySelector('#label_nav_collapsed');
var nav_collapsed = document.querySelector('#nav_collapsed');
var show_coins_currencies = document.querySelector('#show_coins_currencies');
var label_show_coins_currencies = document.querySelector('#label_show_coins_currencies');
var show_exchangers_wrap = document.querySelector('#show_exchangers_wrap');
var label_show_exchangers_wrap = document.querySelector('#label_show_exchangers_wrap');
var bases_id = document.querySelector('#bases_id');
var currencies_id = document.querySelector('#currencies_id');
var exchangers_id = document.querySelector('#exchangers_id');

if (showNav == true) {
    label_nav_collapsed.classList.remove("opacity-0", "hidden");
    label_nav_collapsed.classList.add("fixed", "opacity-70");
    nav_collapsed.classList.remove("nav-collapsed") ;
    nav_collapsed.classList.add("fixed", "nav-show") ;
} else {
    label_nav_collapsed.classList.remove("opacity-70");
    label_nav_collapsed.classList.add("opacity-0", "hidden");
    nav_collapsed.classList.remove("nav-show");
    nav_collapsed.classList.add("hidden", "nav-collapsed");
}

var handleNav = () => {
    showNav = !showNav;
    if (showNav == true) {
        label_nav_collapsed.classList.remove("opacity-0", "hidden");
        label_nav_collapsed.classList.add("fixed", "opacity-70");
        nav_collapsed.classList.remove("hidden", "nav-collapsed") ;
        nav_collapsed.classList.add("fixed", "nav-show") ;
    } else {
        label_nav_collapsed.classList.remove("opacity-70");
        label_nav_collapsed.classList.add("opacity-0", "hidden");
        nav_collapsed.classList.remove("nav-show");
        nav_collapsed.classList.add("nav-collapsed");
    }
}

if (showCoins == true) {
    label_show_coins_currencies.classList.add("opacity-70");
    label_show_coins_currencies.classList.remove("opacity-0", "hidden");
    show_coins_currencies.classList.add("opacity-100");
    show_coins_currencies.classList.remove("opacity-0", "hidden");
} else {
    label_show_coins_currencies.classList.add("opacity-0", "hidden");
    label_show_coins_currencies.classList.remove("opacity-70");
    show_coins_currencies.classList.add("opacity-0", "hidden");
    show_coins_currencies.classList.remove("opacity-100");
}

var handleShowCoins = () => {
    showCoins = !showCoins;
    if (showCoins == true) {
        label_show_coins_currencies.classList.add("opacity-70");
        label_show_coins_currencies.classList.remove("opacity-0", "hidden");
        show_coins_currencies.classList.add("opacity-100");
        show_coins_currencies.classList.remove("opacity-0", "hidden");
    } else {
        label_show_coins_currencies.classList.add("opacity-0", "hidden");
        label_show_coins_currencies.classList.remove("opacity-70");
        show_coins_currencies.classList.add("opacity-0", "hidden");
        show_coins_currencies.classList.remove("opacity-100");
    }
}

var hasBase = (base) => {
    let bases = JSON.parse(window.localStorage.getItem('bases'));
    if (bases != null) {
        return bases.includes(base);
    }

    return false;
}

var bases = [
    {name:"Bitcoin", symbol:"BTC", active:hasBase('BTC')},
    {name:"BNB", symbol:"BNB", active:hasBase('BNB')},
    {name:"Cardano", symbol:"ADA", active:hasBase('ADA')},
    {name:"Dogecoin", symbol:"DOGE", active:hasBase('DOGE')},
    {name:"Ethereum", symbol:"ETH", active:hasBase('ETH')},
    {name:"Dollar US", symbol:"USD", active:hasBase('USD')},
    {name:"Litecoin", symbol:"LTC", active:hasBase('LTC')},
    {name:"Monero", symbol:"XMR", active:hasBase('XMR')},
    {name:"Ripple", symbol:"XRP", active:hasBase('XRP')},
    {name:"Tether", symbol:"USDT", active:hasBase('USDT')},
];

bases.map((base, id) => {
    bases_id.innerHTML += `<li class="py-2 border-b border-gray-700/50 text-gray-400" id="${id}">
        <label>
            <div class="flex gap-8 justify-between items-center">
                <p>${base.name} (${base.symbol})</p>
                <input type="checkbox" ${base.active == true ? 'checked' : ''} onchange="toggleBase("${base.symbol}")" />
            </div>                                
        </label>
    </li>`
});

var addToBase = (base) => {
    let bases = [];
    if (window.localStorage.getItem('bases') != null) {
        bases = JSON.parse(window.localStorage.getItem('bases'));
    }
    bases.push(base);
    window.localStorage.setItem('bases', JSON.stringify(bases));
}

var removeBase = (base) => {
    let bases = [];
    if (window.localStorage.getItem('bases') != null) {
        bases = JSON.parse(window.localStorage.getItem('bases'));
    }
    if (hasBase(base)) {
        bases = bases.filter((eachBase) => eachBase != base);
        window.localStorage.setItem('bases', JSON.stringify(bases));
    }
}

var toggleBase = (base) => {
    if (hasBase(base)) {
        removeBase(base);
    } else {
        addToBase(base);
    }
    let updatedBases = [];
    bases.map((eachBase) => {
        if (eachBase.symbol == base) {
            eachBase.active = !eachBase.active;
        }
        updatedBases.push(eachBase);
    });
    bases = updatedBases;
}

// //////////////////////////////////

var hasCurrency = (currency) => {
    let currencies = JSON.parse(window.localStorage.getItem('currencies'));
    if (currencies != null) {
        return currencies.includes(currency);
    }

    return false;
}

currencies = [
    {name:"Bitcoin", symbol:"BTC", active:hasCurrency('BTC')},
    {name:"BNB", symbol:"BNB", active:hasCurrency('BNB')},
    {name:"Cardano", symbol:"ADA", active:hasCurrency('ADA')},
    {name:"Dogecoin", symbol:"DOGE", active:hasCurrency('DOGE')},
    {name:"Ethereum", symbol:"ETH", active:hasCurrency('ETH')},
    {name:"Dollar US", symbol:"USD", active:hasCurrency('USD')},
    {name:"Litecoin", symbol:"LTC", active:hasCurrency('LTC')},
    {name:"Monero", symbol:"XMR", active:hasCurrency('XMR')},
    {name:"Ripple", symbol:"XRP", active:hasCurrency('XRP')},
    {name:"Tether", symbol:"USDT", active:hasCurrency('USDT')},
];

currencies.map((currency, id) => {
    currencies_id.innerHTML += `<li class="py-2 border-b border-gray-700/50 text-gray-400" id="${id}">
        <label>
            <div class="flex gap-8 justify-between items-center">
                <p>${currency.name} (${currency.symbol})</p>
                <input type="checkbox" ${currency.active == true ? 'checked' : ''} onchange="toggleCurrency('${currency.symbol}')" />
            </div>                                
        </label>
    </li>`
});

var addToCurrencies = (currency) => {
    let currencies = [];
    if (window.localStorage.getItem('currencies') != null) {
        currencies = JSON.parse(window.localStorage.getItem('currencies'));
    }
    currencies.push(currency);
    window.localStorage.setItem('currencies', JSON.stringify(currencies));
}

var removeCurrency = (currency) => {
    let currencies = [];
    if (window.localStorage.getItem('currencies') != null) {
        currencies = JSON.parse(window.localStorage.getItem('currencies'));
    }
    if (hasCurrency(currency)) {
        currencies = currencies.filter((eachCurrency) => eachCurrency != currency);
        window.localStorage.setItem('currencies', JSON.stringify(currencies));
    }
}

var toggleCurrency = (currency) => {
    if (hasCurrency(currency)) {
        removeCurrency(currency);
    } else {
        addToCurrencies(currency);
    }
    let updatedCurrencies = [];
    currencies.map((eachCurrency) => {
        if (eachCurrency.symbol == currency) {
            eachCurrency.active = !eachCurrency.active;
        }
        updatedCurrencies.push(eachCurrency);
    });
    currencies = updatedCurrencies;
}

//////////////////////////////////////////

if (showExchangers == true) {
    label_show_exchangers_wrap.classList.add("opacity-70");
    label_show_exchangers_wrap.classList.remove("opacity-0", "hidden");
    show_exchangers_wrap.classList.add("opacity-100");
    show_exchangers_wrap.classList.remove("opacity-0", "hidden");
} else {
    label_show_exchangers_wrap.classList.add("opacity-0", "hidden");
    label_show_exchangers_wrap.classList.remove("opacity-70");
    show_exchangers_wrap.classList.add("opacity-0", "hidden");
    show_exchangers_wrap.classList.remove("opacity-100");
}

var handleShowExchangers = () => {
    showExchangers = !showExchangers;
    if (showExchangers == true) {
        label_show_exchangers_wrap.classList.add("opacity-70");
        label_show_exchangers_wrap.classList.remove("opacity-0", "hidden");
        show_exchangers_wrap.classList.add("opacity-100");
        show_exchangers_wrap.classList.remove("opacity-0", "hidden");
    } else {
        label_show_exchangers_wrap.classList.add("opacity-0", "hidden");
        label_show_exchangers_wrap.classList.remove("opacity-70");
        show_exchangers_wrap.classList.add("opacity-0", "hidden");
        show_exchangers_wrap.classList.remove("opacity-100");
    }
}

var hasExchanger = (exchanger) => {
    let exchangers = JSON.parse(window.localStorage.getItem('exchangers'));
    if (exchangers != null) {
        return exchangers.includes(exchanger);
    }

    return false;
}

var exchangers = [
    {name:"AAX", active:hasExchanger('AAX')},
    {name:"Ascendex", active:hasExchanger('Ascendex')},
    {name:"Bigone", active:hasExchanger('Bigone')},
    {name:"Biquant", active:hasExchanger('Biquant')},
    {name:"Coinbase", active:hasExchanger('Coinbase')},
    {name:"Gemini", active:hasExchanger('Gemini')},
    {name:"Kucoin", active:hasExchanger('Kucoin')},
];

exchangers.map((exchangers, id) => {
    exchangers_id.innerHTML += `<li class="py-2 border-b border-gray-700/50 text-gray-400" id="${id}">
        <label>
            <div class="flex gap-8 justify-between items-center">
                <p>${exchangers.name}</p>
                <input type="checkbox" ${exchangers.active == true ? 'checked' : ''} onchange="toggleExchanger('${exchangers.name}')" />
            </div>                                
        </label>
    </li>`
})

var addToExchangers = (exchanger) => {
    let exchangers = [];
    if (window.localStorage.getItem('exchangers') != null) {
        exchangers = JSON.parse(window.localStorage.getItem('exchangers'));
    }
    exchangers.push(exchanger);
    window.localStorage.setItem('exchangers', JSON.stringify(exchangers));
}

var removeExchanger = (exchanger) => {
    let exchangers = [];
    if (window.localStorage.getItem('exchangers') != null) {
        exchangers = JSON.parse(window.localStorage.getItem('exchangers'));
    }
    if (hasExchanger(exchanger)) {
        exchangers = exchangers.filter((eachExchanger) => eachExchanger != exchanger);
        window.localStorage.setItem('exchangers', JSON.stringify(exchangers));
    }
}

var toggleExchanger = (exchanger) => {
    if (hasExchanger(exchanger)) {
        removeExchanger(exchanger);
    } else {
        addToExchangers(exchanger);
    }
    let updatedExchangers = [];
    exchangers.map((eachExchanger) => {
        if (eachExchanger.name == exchanger) {
            eachExchanger.active = !eachExchanger.active;
        }
        updatedExchangers.push(eachExchanger);
    });
    exchangers = updatedExchangers;
}

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
