import Image from 'next/image';
import Link from 'next/link';

import toggleIcon from '/public/bars-3-bottom-right.svg';
import logoDark from '/public/logo-no-bg-dark.svg';

const Nav = () => {
    return (
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
            <a href="/"><h1 className="font-bold text-xl">Krycom by Ikenna, Henrietta, and Chinwendu</h1></a>
          </div>
          <div id="blinds_id" className=""></div>
          <div className="">
            <ul className="hidden md:flex gap-4">
              <Link href="/documentation" className="nav-link"><li>Documentation</li></Link>
              <Link href="/about-us" className="nav-link"><li>About us</li></Link>
              <Link href="/" className="nav-link"><li>Blog</li></Link>
              <Link href="/products" className="nav-link"><li>Products</li></Link>
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
    );
}

export default Nav;
