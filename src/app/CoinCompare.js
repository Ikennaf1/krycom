"use client";

import { useEffect, useState, useMemo } from 'react';
import Exchanger from '../../classes/Exchanger';

const CoinCompare = () => {
    const [ suggestions, setSuggestions ] = useState([]);
    const [ lowBuy, setLowBuy ] = useState(1000000000);
    const [ highSell, setHighSell ] = useState(0);
    const [ lowBuyExchanger, setLowBuyExchanger ] = useState('');
    const [ highSellExchanger, setHighSellExchanger ] = useState('');

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

    useEffect(() => {
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

        let bases = JSON.parse(getLocal('bases'));
        let currencies = JSON.parse(getLocal('currencies'));
        let exchangers = JSON.parse(getLocal('exchangers'));

        bases.map((base) => {
            currencies.filter((currency) => base != currency)
                .map(async (currency) => {
                    let suggestion = {
                        'lowBuy': 1000000000,
                        'highSell': 0
                    };
                    suggestion.baseCurrency = `${base}-${currency}`;
                    exchangers.map(async (exchanger) => {
                        exchanger = new Exchanger(exchanger);
                        let prices = '';
                        prices =  await exchanger.get(base, currency);
                        if (parseFloat(prices.buy) < suggestion.lowBuy) {
                            suggestion.lowBuy = parseFloat(prices.buy);
                            suggestion.buyExchanger = exchanger.getName();
                            setLocal('lowBuy', parseFloat(prices.buy));
                            setLowBuy(prices.buy);
                            setLowBuyExchanger(exchanger.name);
                        }
                        if (parseFloat(prices.sell) > suggestion.highSell) {
                            suggestion.highSell = parseFloat(prices.sell);
                            suggestion.sellExchanger = exchanger.getName();
                            setLocal('highSell', parseFloat(prices.sell));
                            setHighSell(prices.sell);
                            setHighSellExchanger(exchanger.getName());
                        }
                    });

                    setSuggestions((suggestions) => [...suggestions, suggestion])
                    appendToLocal('suggestions', suggestion);
                });
        });
    }, []);

    return (
                suggestions &&
        <>
            <div className="font-light">
                <div className="overflow-x-auto">
                    {
                        suggestions.filter((suggestion) => ((suggestion.buyExchanger != suggestion.sellExchanger) && (suggestion.lowBuy > 0)))
                        .map((suggestion, id) => (
                            <div className="flex flex-col my-8" key={id}>
                                <div className="text-center bg-gray-900 text-gray-400">
                                    {suggestion.baseCurrency}
                                </div>
                                <hr className="border border-[#0a0b0c]" />
                                <div className="w-full">
                                    <div className="flex">
                                        <table className="w-full border border-gray-900 border-collapse bg-[bg-gray-900] text-left text-sm text-gray-400">
                                            <thead className="bg-[#0a0a0a]">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4 font-bold text-gray-400">Buy from</th>
                                                    <th scope="col" className="px-6 py-4 font-bold text-gray-400">Buy</th>
                                                    <th scope="col" className="px-6 py-4 font-bold text-gray-400">Sell at</th>
                                                    <th scope="col" className="px-6 py-4 font-bold text-gray-400">Sell</th>
                                                    <th scope="col" className="px-6 py-4 font-bold text-gray-400">Profit</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 border-t border-gray-900">
                                                <tr className="odd:bg-black even:bg-[#0a0a0a]">
                                                    <td className="px-6 py-4">{suggestion.buyExchanger}</td>
                                                    <td className="px-6 py-4">{suggestion.lowBuy}</td>
                                                    <td className="px-6 py-4">{suggestion.sellExchanger}</td>
                                                    <td className="px-6 py-4">{suggestion.highSell}</td>
                                                    <td className="px-6 py-4">{suggestion.highSell - suggestion.lowBuy}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CoinCompare;
