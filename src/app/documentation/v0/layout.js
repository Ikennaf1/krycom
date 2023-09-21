"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import NavCollapsible from '../../NavCollapsible';
import topics from './topics.json';

import logoDark from '/public/logo-no-bg-dark.svg';
import toggleIcon from '/public/bars-3-bottom-right.svg';
import TopicContainer from '../TopicContainer';

const DocLayout = ({ children }) => {

    /**
     * Display the available versions with a functionality to
     * redirect to any selected one
     * @param {defaultVersion} param0 string
     */
    const VersionList = ({ defaultVersion }) => {

        const [url, setUrl] = useState('');
    
        const handleVersionSelect = (e) => {
            setUrl(url.replace(/v[0-9]/, e.target.value));
            window.location.href = url;
        }

        useEffect(() => {
            setUrl(window.location.href);
        }, []);
    
        return (
            <select className="w-full rounded p-2 bg-transparent border" defaultValue={ defaultVersion } onChange={(e) => handleVersionSelect(e)}>
                <option value="v0">v0</option>
            </select>
        );
    }

    const TopicListCollapsible = () => {
        const pathname = usePathname();
        const [allTopics] = useState(Object.entries(topics));

        return (
            <div className="">
                <div className="sticky top-0">
                    <VersionList defaultVersion="v0" />
                </div>
                <ul id="topic_list_collapsible">
                {
                    allTopics.map((topic, i) => 
                        <li key={i}>
                            <Link href={`${topic[1]}`} className={`topic-list-items-collapsible ${pathname.endsWith((topic[1]).substr(1)) ? "active-topic" : ""}`}>{topic[0]}</Link>
                        </li>
                    )
                }
                </ul>
            </div>
        );
    }
    
    return (
        <main>
            <NavCollapsible>
                <div className="mt-4 h-1/2 overflow-y-auto flex flex-col gap-8">
                    <ul id="topic_list_collapsible border-b border-gray-300">
                        <Link href='/documentation' className="topic-list-items-collapsible"><li>Documentation</li></Link>
                        {/* <Link href='/about-us' className="topic-list-items-collapsible"><li>About us</li></Link>
                        <Link href='/documentation' className="topic-list-items-collapsible"><li>Blog</li></Link>
                        <Link href='/documentation' className="topic-list-items-collapsible"><li>Products</li></Link> */}
                    </ul>
                    <div className="">
                        { TopicListCollapsible() }
                    </div>
                </div>
            </NavCollapsible>

            <nav className="nav text-sm">
                <div className="body-margin flex flex-row justify-between items-center">
                <div className="flex min-w-0 gap-4 items-center">
                    <Link href="/">
                    <Image
                    src={logoDark}
                    width="40"
                    height="40"
                    alt="Blinds logo"
                    />
                    </Link>
                    <Link href="/"><h1 className="font-bold text-xl">Krycom</h1></Link>
                </div>
                <div id="blinds_id" className=""></div>
                <div className="">
                    <ul className="hidden md:flex gap-4">
                        <Link href="/documentation"><li>Documentation</li></Link>
                        {/* <Link href="/about-us"><li>About us</li></Link>
                        <Link href="/"><li>Blog</li></Link>
                        <Link href="/"><li>Products</li></Link> */}
                    </ul>
                    <label htmlFor="collapsedNav" className="md:hidden">
                    <Image
                     src={toggleIcon}
                     width=""
                     height=""
                     alt="toggle menu icon"
                     className="drop-shadow-md cursor-pointer"
                    />
                    </label>
                </div>
                </div>
            </nav>

            <div className="sm:pt-32 pt-24">
                <div className="sm:flex sm:flex-row sm:justify-between sm:gap-4 body-margin">
                    <section className="article-left-margin hidden md:block">
                        <TopicContainer topics={topics} />
                    </section>            

                    <section className="flex flex-col gap-32 bg-white rounded-lg shadow-lg article p-8">
                        { children }
                    </section>

                    <section className="bg-blue-500 hidden sm:block">
                        
                    </section>
                </div>
            </div>
        </main>
    );
}

export default DocLayout;
