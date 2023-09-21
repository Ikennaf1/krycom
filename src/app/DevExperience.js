import Link from "next/link"
import Image from 'next/image';


const DevExpCard = ({ children, title, imgSrc, imgWidth, imgHeight, alt }) => {
    return (
        <div className="dev-products-card-container w-[360px] h-[420px] border overflow-hidden rounded-xl shadow-lg">
            <div className="dev-products-card w-full h-full bg-white flex flex-col gap-4">
                <div className="relative w-[360px] h-[320px]">
                    <Image
                    src={imgSrc}
                    width={imgWidth}
                    height={imgHeight}
                    style={{width:"auto", height:"100%", objectFit:"cover"}}
                    alt={alt}
                    />
                    <div className="absolute mx-auto left-0 right-0 bottom-0 py-4 text-center">
                        <p className="text-center text-xl font-black text-white drop-shadow-lg">{ title }</p>
                    </div>
                </div>

                <div>                    
                    <p className="text-center px-4 text-sm">{ children }</p>
                </div>
            </div>
        </div>
    );
}

const DevExperience = () => {
    return (
        <section className="dev-expe bg-gray-200 py-16">
            <div className="body-margin flex flex-col gap-4">
                <p className="flex flex-col gap-1 text-4xl">
                    <span className="font-light text-[#ff00ff]">Premium</span>
                    developer experience
                </p>
                {/* <p>
                    We are a team of engineers who love to build tools for other engineers, and products for online businesses.<br />
                    Our goal is to create a great development eco-system we&apos;ve always wished we had.<br />
                    Some of our tools and products:
                </p> */}
                <p>
                    We are tool builders who love to build tools for other engineers, and products for online businesses.<br />
                    Our goal is to create a great development eco-system we always wished we had.<br />
                    Some of the tools and products:
                </p>
                <div className="flex flex-row gap-4 py-4 overflow-auto">
                    <DevExpCard
                     imgSrc="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/laptop-dark.jpg"
                     alt="Blinds dark mode"
                     title="Blinds dark mode"
                     imgWidth={640}
                     imgHeight={427}>
                        The only dark mode library you need for your new and existing websites.
                    </DevExpCard>
                </div>
                <Link className="inline-block w-40 rounded-3xl px-4 py-3 shadow-lg bg-orange-400 text-sm text-black hover:bg-orange-500 transition duration-100 ease-linear" href="/">See all products &rarr;</Link>
            </div>
        </section>
    );
}

export default DevExperience;
