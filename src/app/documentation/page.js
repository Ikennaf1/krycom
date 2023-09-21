import Image from 'next/image';
import Link from 'next/link';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import NavCollapsible from '../NavCollapsible';

import logoDark from '/public/logo-no-bg-dark.svg';
import toggleIcon from '/public/bars-3-bottom-right.svg';

export const metadata = {
  title: 'Blinds | Documentation',
  description: 'The best dark mode package for all websites',
}

const Documentation = () => {
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
            <a href="/"><h1 className="font-bold text-xl">Krycom</h1></a>
          </div>
          <div id="blinds_id" className=""></div>
          <div className="">
            <ul className="hidden md:flex gap-4">
              <Link href="/documentation" className="nav-link"><li>Documentation</li></Link>
              {/* <Link href="/about-us" className="nav-link"><li>About us</li></Link>
              <Link href="/" className="nav-link"><li>Blog</li></Link>
              <Link href="/products" className="nav-link"><li>Products</li></Link> */}
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
      <header className="doc-page-header flex flex-col gap-16 pt-24 md:pt-32">
        <div className="body-margin h-[85%]">
          <div className="doc-page-header-inner border h-[100%] bg-gray-200 rounded-xl overflow-hidden border-gray-300 shadow-lg block sm:flex sm:flex-row sm:flex-wrap">

            <div className="doc-header-list border-b sm:border-r">
              <div className="doc-header-list-quadrant">
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e7112d]/40">
                    <Image
                    src="/feather.svg"
                    width="28"
                    height="28"
                    alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="">The Blinds documentation</h3>
                  <p>Get up to full speed with Blinds in no time by going through the latest documentation.</p>
                  <div>
                    <Link className="" href="/documentation/v0/quick-start">Blinds v0.6.6 docs</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="doc-header-list border-b  sm:border-b">
              <div className="doc-header-list-quadrant">
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[skyblue]/40">
                    <Image
                    src="/react.svg"
                    width="28"
                    height="28"
                    alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="">Blinds quick-start guides for frameworks</h3>
                  <p>If you work with a framework, or a CMS, check out the latest quick-start guides for your particular framework.</p>
                  <div className="flex flex-row flex-wrap gap-4">
                    <Link className="" href="/">React</Link>
                    <Link className="" href="/">Nextjs</Link>
                    <Link className="" href="/">WordPress</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="doc-header-list border-b sm:border-b-0">
              <div className="doc-header-list-quadrant">
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[teal]/40">
                    <Image
                    src="/building-storefront.svg"
                    width="28"
                    height="28"
                    alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="">What about our other products?</h3>
                  <p>From plugins and components, to entire layouts and starter kits. Discover all of our products designed to give you a great headstart.</p>
                  <div className="flex flex-row flex-wrap gap-4">
                    <Link className="" href="/">See all our products</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="doc-header-list sm:border-l">
              <div className="doc-header-list-quadrant">
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#ff4e0e]/40">
                    <Image
                    src="/newspaper.svg"
                    width="28"
                    height="28"
                    alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="">Blinds in the news</h3>
                  <p>Keep up to date with our products. Get unique insights into what they are, and how they can accelerate your business.</p>
                  <div className="flex flex-row flex-wrap gap-4">
                    <Link className="" href="/">Visit our blog</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-center text-sm mb-8">
          <p>Or read our quick-start guide below &gt;&gt;</p>
        </div>
      </header>

      {/* Section One */}
      <SectionOne />

      {/* Section Two */}
      <SectionTwo />

      {/* Section Three */}
      <SectionThree />

      {/* Section Four */}
      <SectionFour />

    </main>
  )
}

export default Documentation;
