"use client";

import { useEffect, useState, useMemo } from 'react';
import Exchanger from '../../classes/Exchanger';
import Link from 'next/link';

const CoinCompare = () => {
    const [ suggests, setSuggests ] = useState(null);
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
            setLocal('exchangers', JSON.stringify(['Coinbase']));
            setLocal('lowBuy', 1000000000);
            setLocal('highSell', 0);
        }

        let bases = JSON.parse(getLocal('bases'));
        let currencies = JSON.parse(getLocal('currencies'));
        let exchangers = JSON.parse(getLocal('exchangers'));

        bases.map((base) => {
            currencies.filter((currency) => base != currency)
                .map(async (currency) => {
                    exchangers.map(async (exchanger) => {
                        exchanger = new Exchanger(exchanger);
                        let prices = '';
                        prices =  await exchanger.get(base, currency);
                        if (parseFloat(prices.buy) < getLocal('lowBuy')) {
                            setLocal('lowBuy', prices.buy);
                            setLocal('lowBuyExchanger', exchanger.name);
                        }
                        if (parseFloat(prices.sell) > getLocal('highSell')) {
                            setLocal('highSell', prices.sell);
                            setLocal('highSellExchanger', exchanger.name);
                        }
                    });

                    let baseCurrency = `${base}-${currency}`;
                    let suggestion = {
                        "baseCurrency": baseCurrency,
                        "buyExchanger": getLocal('lowBuyExchanger'),
                        "sellExchanger": getLocal('highSellExchanger'),
                        "buy": getLocal('lowBuy'),
                        "sell": getLocal('highSell')
                    };

                    appendToLocal('suggestions', suggestion);
                    // setSuggests(getLocal('suggestions'));

                    // console.log("low buy is ", getLocal('lowBuy'));
                    // console.log("high sell is ", getLocal('highSell'));
                    // console.log("Suggestions is ", getLocal('suggestions'));
                    setLocal('lowBuy', 1000000000);
                    setLocal('highSell', 0);
                });
        });        
    }, []);

    return (
                // suggests &&
        <>
            <div className="font-light">
                Coin compare
            </div>
            {
                // console.log("Suggestions is ", suggests)
                // console.log("Suggestions is ", getLocal('suggestions'))
            }
        </>
    )
}

export default CoinCompare;
