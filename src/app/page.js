import Image from 'next/image';
import Link from 'next/link';
import NavCollapsible from './NavCollapsible';

import logo from '/public/logo-no-bg.svg';
import CompanyClientsSection from './CompanyClientsSection';
import Integrate from './Integrate';
import DevExperience from './DevExperience';
import Features from './Features';
import Testimonials from './Testimonials';
import Nav from './Nav';

export const metadata = {
  title: 'Blinds | Home',
  description: 'The best dark mode package for all websites',
}

const Home = () => {
  return (
    <main className="flex flex-col gap-32 justify-start">
      <NavCollapsible>
        <div className="mt-4 h-1/2 overflow-y-auto">
          <ul id="topic_list_collapsible">
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Documentation</li></Link>
            {/* <Link href='/about-us' className="topic-list-items-collapsible"><li>About us</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Blog</li></Link>
            <Link href='/products' className="topic-list-items-collapsible"><li>Products</li></Link> */}
          </ul>
        </div>
      </NavCollapsible>
      
      <Nav />
      
      {/* Header */}
      <header className="header pt-32">
        <div className="cta body-margin h-[85%]">
          <div className="w-24 h-24 sm:w-40 sm:h-40 m-auto">
              <Image
               src={logo}
               width=""
               height=""
               alt="Blinds logo"
               className="drop-shadow-md"
              />
          </div>
          <div className="w-3/4 text-center m-auto mt-4">
              <h2 className="">A dark mode library for the modern web</h2>
              <p className="mt-4">
                  Blinds provides the scaffold required to give your customers the dark mode user interface necessary for a truely modern website.
              </p>
              <div className="mt-8 flex flex-row gap-8 items-center justify-center">
                <Link href="/documentation/v0/quick-start" className="inline-block rounded-3xl px-4 py-3 shadow-lg bg-[#14161f] text-sm text-white hover:bg-[black] transition duration-100 ease-linear">Get Started &rarr;</Link>
                <Link href="/documentation" className="inline-block rounded-3xl px-4 py-3 shadow-lg bg-none text-sm hover:bg-gray-200 transition duration-100 ease-linear">Documentation</Link>
              </div>
              <ul className="mt-6 flex justify-center items-center text-gray-400 text-sm">
                  <li className="mx-3">Currently v0.6.6</li>
                  <li>·</li>
                  <li className="mx-3"><a href="https://github.com/Ikennaf1/blinds">Visit Github</a></li>
                  <li>·</li>
                  <li className="mx-3"><a href="https://github.com/Ikennaf1/blinds/tags">See all releases</a></li>
              </ul>
          </div>
        </div>
      </header>

      {/* <CompanyClientsSection /> */}

      {/* Section One */}
      <Features />

      {/* Section Two */}
      <Integrate />

      {/* Section Three */}
      <DevExperience />

      {/* Section Four */}
      <Testimonials />

    </main>
  )
}

export default Home;
