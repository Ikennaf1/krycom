"use client";

import { useEffect, useState } from 'react';
import Exchanger from '../../classes/Exchanger';
import Link from 'next/link';

const CoinCompare = () => {

    const [ bases, setBases ]           = useState(['USD', 'BTC']);
    const [ currencies, setCurrencies ] = useState(['USD', 'BTC']);
    const [ exchangers, setExchangers ] = useState(['Coinbase']);

    useEffect(() => {
        if (
                window.localStorage.getItem('bases') == null
                || window.localStorage.getItem('currencies') == null
                || window.localStorage.getItem('exchangers') == null
            ) {
            window.localStorage.setItem('bases', JSON.stringify(bases));
            window.localStorage.setItem('currencies', JSON.stringify(currencies));
            window.localStorage.setItem('exchangers', JSON.stringify(['Coinbase']));
        }

        (function() {
             setBases(JSON.parse(window.localStorage.getItem('bases')));
             setCurrencies(JSON.parse(window.localStorage.getItem('currencies')));
             setExchangers(JSON.parse(window.localStorage.getItem('exchangers')));
        })();

        console.log(exchangers);

        // exchangers.map((exchanger) => {
        //     exchanger = new Exchanger(exchanger);
        //     console.log(exchanger)
        //     bases.map((base) => {
        //         currencies.filter((currency) => base != currency)
        //             .map((currency) => {
        //                 console.log(`${base} - ${currency}`);
        //         });
        //     });
        // });

        bases.map((base) => {
            currencies.filter((currency) => base != currency)
                .map((currency) => {
                    exchangers.map((exchanger) => {
                        exchanger = new Exchanger(exchanger);
                        console.log(exchanger.get(base, currency));
                    })
            });
        });
        
    }, []);

    return (
        <>
            <div className="font-light">
                Coin compare
            </div>
        </>
    )
}

export default CoinCompare;
