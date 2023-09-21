import Link from 'next/link';
import Image from 'next/image'

import NavCollapsible from '../NavCollapsible';
import logoDark from '/public/logo-no-bg-dark.svg';
import toggleIcon from '/public/bars-3-bottom-right.svg';

export const metadata = {
  metadataBase: new URL('https://raw.githubusercontent.com'),
  title: 'Blinds | About',
  description: 'The best dark mode package for all websites',
  keywords: ['dark', 'dark mode', 'night mode'],

  openGraph: {
    title: 'Blinds | About',
    description: 'The best dark mode package for all websites',
    url: 'https://blindsjs.dev/about-us',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/og-blinds.jpg',
        width: '1200',
        height: '630'
      }
    ],
  }
}

const AboutUs = () => {
  return (
    <main className="flex flex-col gap-16 sm:gap-32 justify-start">
      <NavCollapsible>
        <div className="flex flex-col space-between">
        <div className="mt-4 h-1/2 overflow-y-auto">
          <ul id="topic_list_collapsible">
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Documentation</li></Link>
            <Link href='/about-us' className="topic-list-items-collapsible"><li>About</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Blog</li></Link>
            <Link href='/products' className="topic-list-items-collapsible"><li>Products</li></Link>
          </ul>
        </div>
        <div className="flex flex-row flex-wrap gap-8">
          <Link href="https://wa.me/message/HFKHEXWNRCEFE1">
            <Image
            src="whatsapp.svg"
            width="24"
            height="24"
            alt="Whatsapp"
            className="drop-shadow-md cursor-pointer"
            />
          </Link>
          {/* <Image
           src="twitter.svg"
           width="24"
           height="24"
           alt="Twitter"
           className="drop-shadow-md cursor-pointer"
          /> */}
          {/* <Image
           src="facebook.svg"
           width="24"
           height="24"
           alt="facebook"
           className="drop-shadow-md cursor-pointer"
          /> */}
          {/* <Image
           src="wordpress.svg"
           width="24"
           height="24"
           alt="wordpress"
           className="drop-shadow-md cursor-pointer"
          />
          <Image
           src="youtube.svg"
           width="24"
           height="24"
           alt="youtube"
           className="drop-shadow-md cursor-pointer"
          />
          <Image
           src="react.svg"
           width="24"
           height="24"
           alt="react"
           className="drop-shadow-md cursor-pointer"
          /> */}
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
            <a href="/"><h1 className="font-bold text-xl">Blinds</h1></a>
          </div>
          <div id="blinds_id" className=""></div>
          <div className="">
            <ul className="hidden md:flex gap-4 items-center">
              <Link href="/documentation" className="nav-link"><li>Documentation</li></Link>
              <Link href="/about-us" className="nav-link"><li>About us</li></Link>
              <Link href="/" className="nav-link"><li>Blog</li></Link>
              <Link href="/products" className="nav-link"><li>Products</li></Link>
              <Link href="https://wa.me/message/HFKHEXWNRCEFE1" className="nav-link">
                <li className="">
                  <Image
                   src="/whatsapp.svg"
                   width="20"
                   height="20"
                   alt="Whatsapp"
                  />
                </li>
              </Link>
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

      {/* Header */}
      <header className="about-jumbo">
        <div className="pt-32 pb-24 body-margin text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-light lg:font-light drop-shadow-lg uppercase inline-block">Blinds</h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-100 drop-shadow-lg">Helping businesses establish their online presence.</p>
        </div>
      </header>

      <section>
        <div className="body-margin text-center flex flex-col items-center gap-4 overflow-hidden">
          <p className="z-10 text-xl md:text-2xl lg:text-3xl font-bold text-black more-than">We are more than just a plugin<br />development firm</p>
          <p className="z-10 font-light">We are your partner in establishing an online presence.<br />We are a humble team of freelancers<br />dedicated to crafting exceptional web experiences for you our client, and your customers.</p>

          <div className="num-backs absolute opacity-20 bg-red-300 flex flex-row mx-auto justify-center self-start items-center text-9xl w-64 h-64 rounded-full font-black text-[white]">
            <span>01</span>
          </div>

          <Image
           src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/vertical_line.png"
           width="4"
           height="94"
           alt="vertical line"
          />

          <p className="z-10 text-xl md:text-2xl lg:text-3xl">Our Mission: Fueling Your Digital Success</p>
          <p className="z-10 font-light">Our mission at Blinds is simple: to empower businesses and brands in establishing their online presence.<br />
          We believe that every organization deserves a remarkable website<br />
          that resonates with their audience and represents their unique identity. Whether it is a sleek corporate site,<br />a captivating e-commerce platform, or an engaging web app, we are here to make your digital aspirations a reality.</p>

          <Image
           src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/vertical_line.png"
           width="4"
           height="94"
           alt="vertical line"
          />

          <a className="more-than-btn-link z-10 w-40 mx-auto px-5 py-4 bg-none border-2 border-[#fb4b7b] hover:bg-[#fb4b7b] text-black hover:text-white hover:shadow-lg rounded-3xl ease-linear duration-100 uppercase font-bold text-xs" href="/">Get started</a>
        </div>
      </section>

      <section className="bg-gray-800 section-2-clip shadow-lg">
        <div className="body-margin text-center flex flex-col items-center gap-4 overflow-hidden py-16 text-gray-200">
          <p className="z-10 text-xl md:text-2xl lg:text-3xl font-bold text-white">Core Values</p>

          <Image
           src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/vertical_line.png"
           width="4"
           height="94"
           alt="vertical line"
          />

          <div className="flex flex-row flex-wrap gap-16 z-10">
            <div className="core-values-img core-values-img-1">
              Professionalism
            </div>
            
            <div className="core-values-img core-values-img-2">
              Affordability
            </div>

            <div className="core-values-img core-values-img-3">
              Exceeding expectations
            </div>
          </div>

          <div className="num-backs absolute opacity-20 bg-green-300 flex flex-row mx-auto justify-center self-end items-center text-9xl w-64 h-64 rounded-full font-black text-[white]">
            <span>02</span>
          </div>

          <Image
           src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/vertical_line.png"
           width="4"
           height="94"
           alt="vertical line"
          />

          <div className="z-10 font-light text-gray-300 md:flex md:flex-row gap-16 md:text-justify">
            <p className="z-10 mt-16 md:mt-0">We approach each project with utmost professionalism,
            ensuring clear communication, timely delivery, and meticulous attention to detail.
            Our commitment to excellence guarantees that your web development experience with us is smooth, efficient, and stress-free.</p>

            <p className="mt-16 md:mt-0">We also understand that budgets vary,
            especially for startups and small businesses. That is why we offer cost-effective solutions without compromising on quality.
            Our pricing structures are designed to provide exceptional value for your investment,
            helping you achieve your online goals within your means.</p>

            <p className="mt-16 md:mt-0">We believe in both satisfying and surpassing your expectations.
            We are not satisfied with just meeting project requirements; we strive to exceed them.
            Our team&apos;s expertise, dedication, and passion enable us to
            deliver outstanding results that leave a lasting impact on your audience.</p>
          </div>

          <Image
           src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/vertical_line.png"
           width="4"
           height="94"
           alt="vertical line"
          />

          <a className="z-10 w-40 mx-auto px-5 py-4 bg-none border-2 border-[#2ec4b6] hover:bg-[#2ec4b6] text-white hover:text-white hover:shadow-lg rounded-3xl ease-linear duration-100 uppercase font-bold text-xs" href="/">Contact us</a>
        </div>
      </section>

      <section className="section-services">
        <div className="body-margin text-center flex flex-col items-center gap-4 overflow-hidden">
          <p className="z-10 text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"><span className="text-gray-300">Expertise and Services: </span>Crafting Exceptional Web Experiences</p>

          {/* <Image
           src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/vertical_line.png"
           width="4"
           height="94"
           alt="vertical line"
          /> */}

          <p className="z-10 font-light text-white">At Blinds, we specialize in both back-end and front-end development,<br />
          ensuring that every aspect of your website<br />
          functions seamlessly and looks visually stunning.<br />
          From creating responsive designs and intuitive user interfaces to developing robust functionalities and integrations,<br />
          we&apos;ve got you covered.<br/>
          Our expertise extends to various technologies, frameworks, and platforms,<br />
          enabling us to tailor solutions that best suit your unique requirements.</p>

          <div className="num-backs absolute opacity-20 bg-[#414eff] flex flex-row mx-auto justify-center self-start items-center text-9xl w-64 h-64 rounded-full font-black text-[white]">
            <span>03</span>
          </div>

          {/* <Image
           src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/vertical_line.png"
           width="4"
           height="94"
           alt="vertical line"
          /> */}

          <a className="z-10 w-40 mx-auto px-5 py-4 bg-none border-2 border-[#414eff] hover:bg-[#414eff] text-white hover:text-white hover:shadow-lg rounded-3xl ease-linear duration-100 uppercase font-bold text-xs" href="/">Get started</a>
        </div>
      </section>

      <section className="bg-gray-500 text-white shadow-lg">
        <div className="body-margin py-8">
          <div className="block w-full sm:flex sm:items-center sm:justify-between sm:gap-10">
              <div className="join-team flex flex-col gap-4 text-center z-10 font-light text-white">
                  <p className="font-bold drop-shadow-lg">Join the Blinds Family: Let us Shape Your Online Presence</p>
                  <p className="drop-shadow-lg">We invite you to join the Blinds family and experience the transformative power of exceptional web development. With our unparalleled expertise, cutting-edge technology, and unwavering dedication, we will help you create a striking online presence that captivates your audience and drives your success.</p>
                  <p className="drop-shadow-lg">Contact us today to discuss your project, and let&apos;s embark on an exciting journey to shape your digital future together.</p>
                  <a className="z-10 w-40 mx-auto px-5 py-4 bg-none border-2 border-[#cece32] hover:bg-[#cece32] text-white hover:text-black hover:shadow-lg rounded-3xl ease-linear duration-100 uppercase font-bold text-xs" href="/">Get started</a>
              </div>
              <div className="section-two-items text-gray-300">
                <Image
                 src="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/team.jpg"
                 width="640"
                 height="427"
                 className="object-cover"
                 alt="Team"
                />
              </div>
          </div>
        </div>
        </section>
    </main>
  );
}

export default AboutUs;
