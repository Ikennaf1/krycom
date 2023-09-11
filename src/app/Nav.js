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
            <nav className="fixed w-full">
                <div className="body-margin flex justify-between items-center h-16 border-b border-gray-700">
                    <div className="text-lg font-bold">
                        <Link href="/"><h1>Krycom</h1></Link>
                    </div>

                    <div>
                        {/*  */}
                    </div>
                </div>
            </nav>

            <button className="pt-64" type="button" onClick={ () => handleNav() }>this btn</button>

            {/* <div className={`fixed w-full h-full bg-black/80 z-40`}></div> */}
        </>
    )
}

export default Nav;
