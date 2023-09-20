"use client";

import { useEffect, useState, useMemo } from 'react';
import Exchanger from '../../classes/Exchanger';
import Link from 'next/link';

const CoinCompare = () => {
    const [ suggestions, setSuggestions ] = useState([]);
    const [ lowBuy, setLowBuy ] = useState(1000000000);
    const [ highSell, setHighSell ] = useState(0);
    const [ lowBuyExchanger, setLowBuyExchanger ] = useState('');
    const [ highSellExchanger, setHighSellExchanger ] = useState('');

    const handleRender = () => {
        setRender((render) => !render);
    }

    window.localStorage.clear();

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
        if (
               getLocal('bases') == null
                || getLocal('currencies') == null
                || getLocal('exchangers') == null
            ) {
            setLocal('bases', JSON.stringify(['USD', 'BTC']));
            setLocal('currencies', JSON.stringify(['USD', 'BTC']));
            setLocal('exchangers', JSON.stringify(['Gemini', 'Coinbase']));
            setLocal('lowBuy', 1000000000);
            setLocal('highSell', 0);
        }

        let bases = JSON.parse(getLocal('bases'));
        let currencies = JSON.parse(getLocal('currencies'));
        let exchangers = JSON.parse(getLocal('exchangers'));

        bases.map((base) => {
            currencies.filter((currency) => base != currency)
                .map(async (currency) => {
                    let suggestion = {};
                        suggestion.baseCurrency = `${base}-${currency}`;
                    exchangers.map(async (exchanger) => {
                        exchanger = new Exchanger(exchanger);
                        let prices = '';
                        prices =  await exchanger.get(base, currency);
                        if (parseFloat(prices.buy) < lowBuy) {
                            setLowBuy(prices.buy);
                            setLowBuyExchanger(exchanger.name);
                            suggestion.lowBuy = prices.buy;
                            suggestion.buyExchanger = exchanger.getName();
                        }
                        if (parseFloat(prices.sell) > highSell) {
                            setHighSell(prices.sell);
                            setHighSellExchanger(exchanger.getName());
                            suggestion.highSell = prices.sell;
                            suggestion.sellExchanger = exchanger.getName();
                        }
                    });

                    setSuggestions((suggestions) => [...suggestions, suggestion])
                    appendToLocal('suggestions', suggestion);

                    setLowBuy(1000000000);
                    setHighSell(0);
                });
        });
    }, []);

    return (
                suggestions &&
        <>
            <div className="font-light">
                Coin compare
            </div>
            {
                console.log("Suggestions is ", suggestions)
            }
        </>
    )
}

export default CoinCompare;
