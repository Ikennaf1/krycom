import Image from 'next/image';
import Link from 'next/link';

const Testimonial = ({ children, imgSrc, imgWidth, imgHeight, testifier, testifierTitle }) => {
    return (
        <div className="card-feature flex flex-col gap-4 p-4 w-[372px] h-40 border rounded-2xl shadow-lg">
            <div className="text-left text-sm">
                <p>&ldquo;{ children }&rdquo;</p>
            </div>

            <div  className="flex flex-row gap-4 text-sm text-left items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                     src={imgSrc}
                     width={imgWidth}
                     height={imgHeight}
                     alt={`Picture of ${testifier}`}
                     objectFit="cover"
                     style={{width:"auto", height:"100%"}}
                    />
                </div>

                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-bold">{testifier}</p>
                    <p className="text-xs">{testifierTitle}</p>
                </div>
            </div>
        </div>
    );
}

const Testimonials = () => {
    return (
        <section className="">
            <div className="body-margin flex flex-col gap-8">
                <div className="flex flex-row justify-center">
                    <div className="ceo-quote">
                        <i></i>
                        Blindsjs represents a unique way of interaction between businesses and technology.
                        We bridge the gap between great technology, professionalism, and affordability.
                        We occupy a strategic position where we best serve both businesses and world class developers,
                        delivering enterprise-grade solutions for the price and flexibility of freelance.
                        <p className="mt-2 text-center text-sm">- Ikenna Isiogu</p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 text-center">
                    <p className="text-4xl">
                       <span className="font-light text-[#ff00ff]">We go beyond expectations</span><br />
                        to solve your web development needs
                    </p>
                    <p>
                        Our mission is to provide the best possible solutions with our products and our services.<br />
                        {/* Some of our satisfied clients have this to say about us: */}
                    </p>

                    {/* <div className="flex flex-row gap-8 justify-center">
                        <Testimonial
                         imgSrc="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/laptop-dark.jpg"
                         testifier="Ikenna"
                         testifierTitle="Founder Blindsjs.dev"
                         imgWidth={640}
                         imgHeight={427}>
                            We snmng si ngs ing isnfin snfi sifn snifni sfign snfi visninfnbisd ifn sdfisnvnspnpsinf psn vs fisnivnsfv isnpn ifn bs.
                        </Testimonial>
                    </div> */}

                    <div>
                        <p className="text-4xl">
                        <span className="text-3xl inline-block font-bold mb-2">Web development reimagined</span><br />
                            Available today
                        </p>
                        <Link className="mt-8 inline-block w-40 rounded-3xl px-4 py-3 shadow-lg bg-orange-400 text-sm text-black hover:bg-orange-500 transition duration-100 ease-linear" href="/">Get started &rarr;</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
