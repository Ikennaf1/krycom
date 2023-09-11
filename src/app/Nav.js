"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {

    const [ showNav, setShowNav ] = useState( false );

    const handleNav = () => {
        setShowNav((showNav) => !showNav);
    }

    return (
        <>
            <nav className="fixed w-full z-30">
                <div className="body-margin flex justify-between items-center h-16 border-b border-gray-700">
                    <div className="text-lg font-bold">
                        <Link href="/"><h1>Krycom</h1></Link>
                    </div>

                    <div>
                        <ul className="flex gap-4 items-center">
                            <Link className="hidden md:block" href=""><li>Coins</li></Link>
                            <Link className="hidden md:block" href=""><li>Exchangers</li></Link>
                            <label className="block md:hidden" htmlFor="show_nav">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                </svg>
                            </label>
                        </ul>
                    </div>
                </div>
            </nav>

            <button id="show_nav" className="hidden" type="button" onClick={ () => handleNav() }></button>

            <label htmlFor="show_nav" className={`fixed w-full h-full bg-black z-40 ${showNav === false ? 'opacity-0 hidden' : 'opacity-70 transition duration-300 ease-in-out delay-500'}`}></label>
            <div className={`fixed md:hidden w-3/4 h-screen z-50 bg-[#0a0a0a] p-3 font-light ${showNav === false ? 'nav-collapsed' : 'nav-show'}`}>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center h-16 border-b border-gray-700">
                        <Link className="font-bold" href="/"><h2>Krycom</h2></Link>
                        <label className="cursor-pointer" htmlFor="show_nav">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </label>
                    </div>

                    <ul className="flex flex-col gap-4 items-start">
                        <Link className="block md:hidden" href=""><li>Coins</li></Link>
                        <Link className="block md:hidden" href=""><li>Exchangers</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;
