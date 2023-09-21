import Link from 'next/link';

const CardFeature = ({ children, title, icon }) => {
    return (
        <div className="flex flex-row flex-wrap gap-8">
                    
            <div className="card-feature flex flex-col gap-2 w-full sm:w-64 md:w-72 lg:w-80 h-40 overflow-hidden border rounded-2xl p-4 shadow-lg">                        
                { icon }
                <p className="text-sm font-bold">{ title }</p>
                <p className="text-xs">
                    { children }
                </p>
            </div>

        </div>
    );
}

const Features = () => {
    return (
        <section>
            <div className="body-margin flex flex-col gap-8 items-center">
                <div>
                    <p className="flex flex-col gap-1 text-4xl">
                        <span className="font-light text-[#ff00ff]">The dark mode package</span><br />
                        that lets you choose
                    </p>
                </div>

                <div className="flex flex-row flex-wrap gap-8 lg:gap-12">
                    <CardFeature
                    title="Framework agnostic"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                    </svg>
                    }>
                        It does not matter which framework your website runs as long as it runs on the web browser.
                        Blinds will happily work with any or no framework.
                    </CardFeature>

                    <CardFeature
                    title="Customizable dark theme"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                    }>
                        Go beyond the default and make your dark mode look exactly how you want. Your brand&apos;s dark theme should complement its normal theme, and with Blinds, you have the ability to make this happen.
                    </CardFeature>

                    {/* <CardFeature
                    title="Time based activation"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H360c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V67c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V445c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67V48H24C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5H284.2c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67V48H80V67c0 22.1 7 43.4 19.8 61H284.2z"/>
                    </svg>
                    }>
                        Enable time based activation so dark mode automatically gets enabled and disabled at certain times of the day or night.
                        This isbased on the user&apos;s device time.
                    </CardFeature> */}

                    <CardFeature
                    title="Flexible toggle icons"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  
                    }>
                        Built in with hooks that let you set and customize your toggle icons to fit the look and feel of your brand. This sets you apart from the rest of the web.
                    </CardFeature>

                    <CardFeature
                    title="Show the toggle icons or not"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>                                    
                    }>
                        Hide or show the toggle icons to let your users have the ability to toggle between dark mode or normal mode.
                        If you hide the icons, the user&apos;s prefered color scheme is always used.
                    </CardFeature>

                    <CardFeature
                    title="Fast flexible storage"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                    }>
                        Choose between cookie and local storage. Default choice is local storage.
                    </CardFeature>

                    <CardFeature
                    title="Light-weight"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    }>
                        Ships with a lot of flexibility at under 10kb. Blinds has very little overhead and runs blazingly fast.
                    </CardFeature>

                    {/* <CardFeature
                    title="Faster completion"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}>
                        Faster completion time for both new and existing websites is possible due to ease of installation, and separation of code.
                    </CardFeature> */}
                </div>
                <Link className="inline-block w-40 rounded-3xl px-4 py-3 shadow-lg bg-orange-400 text-sm text-black hover:bg-orange-500 transition duration-100 ease-linear" href="/documentation">Go to the docs &rarr;</Link>
            </div>
        </section>
    );
}

export default Features;
