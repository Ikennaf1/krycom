import Link from 'next/link';
import CodeClip from '../CodeClip';

const SectionOne = () => {
    return (
        <section>
            <div className="body-margin">
                <div className="m-auto w-full text-center">
                    <div className="flex items-center justify-center bg-[#2e6ac4]/20 w-16 h-16 rounded-2xl mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2e6ac4" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    </div>
                    <h3 className="text-3xl mt-8">Install Blinds according to your setup</h3>
                    <p className="text-xl mt-2">Activate dark mode in your website with Blinds - Use the CDN, or install via NPM package manager</p>
                    <Link href="/documentation/v0/installation" className="inline-block mt-2 link">
                    Read installation docs
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    </Link>
                </div>
                <div className="block w-full sm:mt-8 sm:mt-16 sm:flex sm:justify-between sm:gap-10">
                    <div className="section-one-items">
                        <div className="flex items-center justify-center bg-[#4524bc]/20 w-12 h-12 rounded-xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4524bc" className="w-6 h-6">
                            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                            <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <h4 className="mt-4 font-bold text-lg text-center">Install via NPM</h4>
                        <p className="mt-4">Install Blinds via NPM to quickly add dark mode capability to your website written in modern frameworks like React, Vue, and Angular.</p>
                        <div className="mt-4">
                        <CodeClip id="npm">
                            npm install --save blinds
                        </CodeClip>
                        </div>                        
                    </div>
                    <div className="section-one-items">
                        <div className="flex items-center justify-center bg-[#aa00ff]/20 w-12 h-12 rounded-xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#aa00ff" className="w-6 h-6">
                                <path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h4 className="mt-4 font-bold text-lg text-center">Include via CDN</h4>
                        <p className="mt-4">Include Blinds via CDN in your HTML as a quick set up script and easily modernize your website with a dark mode user interface.</p>
                        <div className="mt-4">
                        <CodeClip id="cdn">
                            {`<script src="https://cdn.jsdelivr.net/gh/Ikennaf1/blinds@latest/dist/blinds.min.js" defer></script>`} 
                        </CodeClip>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default SectionOne;
