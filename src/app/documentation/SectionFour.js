import Link from "next/link";
import Image from "next/image";


const SectionFour = () => {
    return (
        <section>
            <div className="body-margin">
                <div className="text-center">
                    <div className="flex items-center justify-center bg-[darkred]/20 w-16 h-16 rounded-2xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="darkred" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <h4 className="mt-4 font-bold text-lg">Blinds is coming soon in your favorite CMS</h4>
                    <p className="mt-4">Blinds will become availble starting with WordPress, drupal, and shopify.<br />We are making the best dark mode package available all over the web no matter what your platform is.</p>
                    <div className="flex mt-4 justify-center gap-10">
                        <div className="w-16 h-16 object-cover rounded-full overflow-hidden shadow-md">
                            <Image src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/wordpress.jpg" alt="wordpress" className="object-cover" width="400" height="400" />
                        </div>
                        <div className="w-16 h-16 object-cover rounded-full overflow-hidden shadow-md">
                            <Image src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/shopify.png" alt="shopify" className="object-cover" width="400" height="400" />
                        </div>
                        <div className="w-16 h-16 object-cover rounded-full overflow-hidden shadow-md">
                            <Image src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/drupal.jpg" alt="drupal" className="object-cover" width="400" height="400" />
                        </div>
                    </div>
                    <Link href="/documentation/v0/quick-start" className="inline-block mt-4 link">
                        Get started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SectionFour;
