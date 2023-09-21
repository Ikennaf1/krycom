import CodeClip from "../CodeClip";
import Link from "next/link";

const SectionThree = () => {
    return (
        <section className="">
            <div className="body-margin">
                
                <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto text-center">
                    <div className="flex items-center justify-center bg-[teal]/20 w-16 h-16 rounded-2xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="teal" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                            <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                            <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <ul className="flex mt-4 justify-around items-center text-md sm:text-xl font-bold">
                        <li>Light weight</li>
                        <li>·</li>
                        <li>Flexible</li>
                        <li>·</li>
                        <li>Framework agnostic</li>
                    </ul>
                </div>
                <p className="mt-4 text-lg w-full sm:w-[80%] lg:w-[70%] text-center mx-auto">Regardless of your framework, Blinds has got you covered. Switch up to the plug that lets you easily customize. Blinds is robust, yet quiet.</p>
                <div className="flex justify-center mt-4">
                    <Link href="/documentation/v0/quick-start" className="inline-block link">
                        Read documentation
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>

                <div className="block mt-16 w-full sm:flex sm:items-stretch sm:justify-between sm:gap-10">
                    <div className="section-three-items text-center bg-white">
                        <div className="">
                            <div className="inline-flex items-center justify-center bg-[indigo]/20 w-16 h-16 rounded-2xl mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="indigo" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="mt-4 font-bold text-lg">Make your dark mode icons unique</h4>
                            <p className="mt-4">Skip the default icons. Get the freedom to use any markup, image, or SVG you want for your toggle icons.</p>
                            <Link href="/docs" className="inline-block mt-2 link">
                                Read documentation
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="section-three-items bg-white sm:order-first">
                        <CodeClip id="customizeBlindStyle">
{`setBlindsIcons({
  "normal": "<button>Normal</button>",
  "dark": "<button>Dark</button>"
});

blindsInit();;`}
                        </CodeClip>
                    </div>
                </div>
            </div>
        </section>
        // Personalize it with your own Icons
    );
}

export default SectionThree;
