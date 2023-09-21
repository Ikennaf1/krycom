"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const TopicContainer = ({ topics }) => {

    const pathname = usePathname();

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

    /**
     * Gets the list of topics from a JSON file and parses it to an object of
     * topic title - topic address
     */
    const TopicList = () => {
        const [allTopics] = useState(Object.entries(topics));

        return (
            <div className="topic-list-main">
                <div className="sticky top-0">
                    <VersionList defaultVersion="v0" />
                </div>
                <ul id="topic_list_main">
                {
                    allTopics.map((topic, i) => 
                        <li key={i}>
                            <Link href={`${topic[1]}`} className={`topic-list-items-main ${pathname.endsWith((topic[1]).substr(1)) ? "active-topic" : ""}`}>{topic[0]}</Link>
                        </li>
                    )
                }
                </ul>
            </div>
        );
    }

    return (
        <div>
            { TopicList() }
        </div>
    );
}

export default TopicContainer;
