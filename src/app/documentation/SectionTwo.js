import CodeClip from "../CodeClip";
import Link from "next/link";

const SectionTwo = () => {
    return (
        <section className="bg-gray-800 text-white">
            <div className="body-margin py-8">
                <div className="block w-full sm:flex sm:items-center sm:justify-between sm:gap-10">
                    <div className="section-two-items text-center">
                        <div className="inline-flex items-center justify-center bg-[yellow]/20 w-16 h-16 rounded-2xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6">
                                <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                                <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-2xl text-gray-300">+</div>
                        <div className="inline-flex items-center justify-center bg-[#ff6644]/20 w-16 h-16 rounded-2xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff6644" className="w-6 h-6">
                                <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h4 className="mt-4 font-bold text-lg">Customize your dark mode exactly how you want</h4>
                        <p className="mt-4 text-gray-300">Go beyond the defaults. Get your hands dirty and make your dark mode complement the overall user interface of your website.</p>
                        <Link href="/documentation/v0/quick-start" className="inline-block mt-2 link">
                            Read documentation
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                    <div className="section-two-items text-gray-300">
                        <CodeClip id="customizeBlindStyle">
{`setBlindStyles({
    "body": {
        "background-color": "black",
        "color": "gray"
    },
    "div .container": {
        "background-color": "black",
        "color": "gray"
    },
    "input[type='text']": {
        "background-color": "black",
        "color": "gray"
    }
});

blindsInit();`}
                        </CodeClip>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTwo;
