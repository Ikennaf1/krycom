import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // return (
  //   <footer className="footer mt-16 pb-12 border-t">
  //     <div className="flex items-center justify-center">
  //       <div>
  //         <div className="mt-8 text-center text-sm">
  //           &copy; {new Date().getFullYear()} Blinds
  //         </div>
  //         <div className="text-center mt-5 text-sm">
  //           <a href="/docs/v0/installation" className="m-5">Get started</a>
  //           <a href="https://github.com/Ikennaf1/blinds/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer" className="m-5">Changelog</a>
  //           <a href="https://github.com/Ikennaf1/blinds/blob/main/LICENSE" target="_blank" rel="noreferrer" className="m-5">License</a>
  //           {/* <a href="#" className="m-5" href="#">Templates</a>
  //           <a href="#" className="m-5" href="#">Components</a> */}
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // )

  return (
    <footer className="footer mt-16 py-16 border-t">
      <div className="body-margin flex flex-row flex-wrap gap-4 justify-between">

        <div className="flex-[3] order-1 md:order-0">
          <div className="flex flex-col gap-8">
            <address className="flex flex-col gap-0 not-italic text-sm text-gray-400 font-light">
              <span>9 Hilltop Crescent Federal Housing</span>
              <span>Anambra, Nigeria</span>
            </address>

            <div className="flex flex-row gap-4">
              <Link href="https://wa.me/message/HFKHEXWNRCEFE1">
              <Image
              src="whatsapp.svg"
              width="20"
              height="20"
              alt="Whatsapp"
              className="drop-shadow-md cursor-pointer"
              />
              </Link>
              {/* <Image
              src="twitter.svg"
              width="20"
              height="20"
              alt="Twitter"
              className="drop-shadow-md cursor-pointer"
              /> */}
              {/* <Image
              src="facebook.svg"
              width="20"
              height="20"
              alt="facebook"
              className="drop-shadow-md cursor-pointer"
              /> */}
              {/* <Image
              src="wordpress.svg"
              width="20"
              height="20"
              alt="wordpress"
              className="drop-shadow-md cursor-pointer"
              />
              <Image
              src="youtube.svg"
              width="20"
              height="20"
              alt="youtube"
              className="drop-shadow-md cursor-pointer"
              />
              <Image
              src="react.svg"
              width="20"
              height="20"
              alt="react"
              className="drop-shadow-md cursor-pointer"
              /> */}
            </div>

            <p className="font-light text-xs text-gray-400">&copy; {new Date().getFullYear()} Blindsjs</p>
          </div>          
        </div>

        <div className="flex-[7] order-0 md:order-1">
          <div className="flex flex-row flex-wrap justify-between text-xs text-gray-400">

            <div className="flex flex-col gap-4 mb-8">
              <p className="font-bold">Documentation</p>
              <ul className="flex flex-col gap-4">
                <li><Link href="/documentation">Quick start</Link></li>
                <li><Link href="/">React quick start</Link></li>
                <li><Link href="/">Nextjs quick start</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <p className="font-bold">Resources</p>
              <ul className="flex flex-col gap-4">
                <li><Link href="https://github.com/Ikennaf1/blinds">Github</Link></li>
                <li><Link href="https://github.com/Ikennaf1/blinds/blob/main/CHANGELOG.md">Changelog</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Hooks</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <p className="font-bold">Company</p>
              <ul className="flex flex-col gap-4">
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/">Labs</Link></li>
                <li><Link href="/">Contact</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <p className="font-bold">Legal</p>
              <ul className="flex flex-col gap-4">
                <li><Link href="/">Privacy policy</Link></li>
                <li><Link href="/">Terms of service</Link></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
