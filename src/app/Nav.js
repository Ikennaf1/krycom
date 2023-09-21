"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {

    const [ showNav, setShowNav ] = useState( false );
    const [ showCoins, setShowCoins ] = useState( false );
    const [ showExchangers, setShowExchangers ] = useState( false );

    const hasBase = (base) => {
        let bases = JSON.parse(window.localStorage.getItem('bases'));
        if (bases != null) {
            return bases.includes(base);
        }

        return false;
    }

    const addToBase = (base) => {
        let bases = [];
        if (window.localStorage.getItem('bases') != null) {
            bases = JSON.parse(window.localStorage.getItem('bases'));
        }
        bases.push(base);
        window.localStorage.setItem('bases', JSON.stringify(bases));
    }

    const removeBase = (base) => {
        let bases = [];
        if (window.localStorage.getItem('bases') != null) {
            bases = JSON.parse(window.localStorage.getItem('bases'));
        }
        if (hasBase(base)) {
            bases = bases.filter((eachBase) => eachBase != base);
            window.localStorage.setItem('bases', JSON.stringify(bases));
        }
    }

    const [ bases, setBases ] = useState([
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
    ]);

    const toggleBase = (base) => {
        if (hasBase(base)) {
            removeBase(base);
        } else {
            addToBase(base);
        }
        setBases((bases) => {
            let updatedBases = [];
            bases.map((eachBase) => {
                if (eachBase.symbol == base) {
                    eachBase.active = !eachBase.active;
                }
                updatedBases.push(eachBase);
            });
            return updatedBases;
        })
    }

    //////////////////////////////////

    const hasCurrency = (currency) => {
        let currencies = JSON.parse(window.localStorage.getItem('currencies'));
        if (currencies != null) {
            return currencies.includes(currency);
        }

        return false;
    }

    const addToCurrencies = (currency) => {
        let currencies = [];
        if (window.localStorage.getItem('currencies') != null) {
            currencies = JSON.parse(window.localStorage.getItem('currencies'));
        }
        currencies.push(currency);
        window.localStorage.setItem('currencies', JSON.stringify(currencies));
    }

    const removeCurrency = (currency) => {
        let currencies = [];
        if (window.localStorage.getItem('currencies') != null) {
            currencies = JSON.parse(window.localStorage.getItem('currencies'));
        }
        if (hasCurrency(currency)) {
            currencies = currencies.filter((eachCurrency) => eachCurrency != currency);
            window.localStorage.setItem('currencies', JSON.stringify(currencies));
        }
    }

    const [ currencies, setCurrencies ] = useState([
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
    ]);

    const toggleCurrency = (currency) => {
        if (hasCurrency(currency)) {
            removeCurrency(currency);
        } else {
            addToCurrencies(currency);
        }
        setCurrencies((currencies) => {
            let updatedcurrencies = [];
            currencies.map((eachCurrency) => {
                if (eachCurrency.symbol == currency) {
                    eachCurrency.active = !eachCurrency.active;
                    console.log(eachCurrency.symbol);
                }
                updatedcurrencies.push(eachCurrency);
            });
            return updatedcurrencies;
        })
    }

    const handleNav = () => {
        setShowNav((showNav) => !showNav);
    }

    const handleShowCoins = () => {
        setShowCoins((showCoins) => !showCoins);
    }

    const handleShowExchangers = () => {
        setShowExchangers((showExchangers) => !showExchangers);
    }

    return (
        <>
            <nav className="fixed w-full z-20 bg-[#0a0a0a]">
                <div className="body-margin flex justify-between items-center h-16 border-b border-gray-700/50">
                    <div className="text-lg font-bold">
                        <Link href="/"><h1>Krycom</h1></Link>
                    </div>

                    <div>
                        <ul className="flex gap-4 items-center">
                            <label htmlFor="show_coins"  className="hidden cursor-pointer md:block" href=""><li>Coins</li></label>
                            <label htmlFor="show_exchangers"  className="hidden cursor-pointer md:block" href=""><li>Exchangers</li></label>
                            <Link className="hidden md:block" href="/"><li>Reload</li></Link>
                            <label className="block md:hidden" htmlFor="show_nav">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                </svg>
                            </label>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Show nav */}
            <button id="show_nav" className="hidden" type="button" onClick={ () => handleNav() }></button>

            <label htmlFor="show_nav" className={`fixed w-full h-full bg-black z-30 ${showNav === false ? 'opacity-0 hidden' : 'opacity-70 transition duration-300 ease-in-out delay-500'}`}></label>
            <div className={`fixed md:hidden w-3/4 h-screen z-40 bg-[#0a0a0a] p-3 font-light ${showNav === false ? 'nav-collapsed' : 'nav-show'}`}>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center h-16 border-b border-gray-700/50">
                        <Link className="font-bold" href="/"><h2>Krycom</h2></Link>
                        <label className="cursor-pointer" htmlFor="show_nav">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </label>
                    </div>

                    <ul className="flex flex-col gap-4 items-start">
                        <label htmlFor="show_coins" className="block cursor-pointer md:hidden" href=""><li>Coins</li></label>
                        <label htmlFor="show_exchangers" className="block cursor-pointer md:hidden" href=""><li>Exchangers</li></label>
                        <Link className="block md:hidden" href="/"><li>Reload</li></Link>
                    </ul>
                </div>
            </div>

            {/* Show Coins */}
            <button id="show_coins" className="hidden" type="button" onClick={ () => handleShowCoins() }></button>

            <label htmlFor="show_coins" className={`fixed w-full h-full bg-black z-40 ${showCoins === false ? 'opacity-0 hidden' : 'opacity-70 transition duration-300 ease-in-out delay-500'}`}></label>
            <div className={`fixed w-[360px] md:w-[480px] left-[50%] transform translate-x-[-50%] bg-gray-900 h-[75vh] top-[50%] transform translate-y-[-50%] z-50 overflow-y-auto p-3 font-light ${showCoins === false ? 'opacity-0 hidden' : 'opacity-100 transition duration-300 ease-in-out delay-500'}`}>
                <div className="flex gap-8 justify-between px-4">
                    {/* Bases */}
                    <div className="">
                        <div className="flex justify-between items-center h-8 font-bold border-b border-gray-700/50">
                            Select bases
                        </div>
                        <div className="flex flex-col gap-4 text-sm">
                            <form>
                                <ul>
                                {
                                bases.map((base, id) => (
                                    <li className="py-2 border-b border-gray-700/50 text-gray-400" key={id}>
                                        <label>
                                            <div className="flex gap-8 justify-between items-center">
                                                <p>{`${base.name} (${base.symbol})`}</p>
                                                <input type="checkbox" checked={ base.active } onChange={()=>toggleBase(base.symbol)} />
                                            </div>                                
                                        </label>
                                    </li>
                                ))
                                }
                                </ul>
                            </form>
                        </div>
                    </div>

                    {/* Currencies */}
                    <div className="">
                        <div className="flex justify-between items-center h-8 font-bold border-b border-gray-700/50">
                            Select currencies
                        </div>
                        <div className="flex flex-col gap-4 text-sm">
                            <form>
                                <ul>
                                {
                                currencies.map((currency, id) => (
                                    <li className="py-2 border-b border-gray-700/50 text-gray-400" key={id}>
                                        <label>
                                            <div className="flex gap-8 justify-between items-center">
                                                <p>{`${currency.name} (${currency.symbol})`}</p>
                                                <input type="checkbox" checked={ currency.active } onChange={()=>toggleCurrency(currency.symbol)} />
                                            </div>                                
                                        </label>
                                    </li>
                                ))
                                }
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;
