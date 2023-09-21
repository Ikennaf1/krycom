"use client";

import { useEffect, useState } from 'react';
import Nav from "../Nav";
import NavCollapsible from "../NavCollapsible";
import Link from "next/link";
import Image from 'next/image';
import AllProducts from './Products.json';
import AllCategories from './Categories.json';


const Card = ({ name, imgSrc, imgWidth, imgHeight, alt, price, shortDesc, tags,version }) => {
  return (
    <div className="dev-products-card-container w-[324px] h-[324px] border overflow-hidden rounded-xl shadow-lg">
      <div className="dev-products-card w-full h-full bg-white flex flex-col gap-4">
        <div className="relative w-[324px] h-[240px]">
          <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          style={{width:"auto", height:"100%", objectFit:"cover"}}
          alt={alt}
          />
          {/* <div className="absolute mx-auto left-0 right-0 bottom-0 py-4 text-center">
              <p className="text-center text-xl font-black text-white drop-shadow-lg">{ name }</p>
          </div> */}
        </div>

        <div className="px-4">
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-left text-sm">{ name }</p>
              <p className="text-left font-black text-sm">&#x24;{ price }</p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex flex-row gap-4 items-center text-xs">
                <p>Details</p>
                <Link className="shadow-md hover:shadow-sm" href="/"><p className="px-2 py-1 border font-bold text-[#ff0080] border-[#ff0080] rounded-sm">View demo</p></Link>
              </div>

              <p className="text-xs font-light text-gray-400">Version { version }</p>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

const Prods = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(AllProducts.products);
    setCategories(AllCategories.categories);
  }, [products, categories]);

  return (
    <main className="flex flex-col gap-32 justify-start">
      <NavCollapsible>
        <div className="mt-4 h-1/2 overflow-y-auto">
          <ul id="topic_list_collapsible">
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Documentation</li></Link>
            <Link href='/about-us' className="topic-list-items-collapsible"><li>About us</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Blog</li></Link>
            <Link href='/products' className="topic-list-items-collapsible"><li>Products</li></Link>
          </ul>
        </div>
      </NavCollapsible>
      
      {/* Navigation bar */}
      <Nav />

      <section className="pt-32 pb-16 all-products-header shadow-lg">
        <div className="body-margin flex flex-col gap-12 text-center text-white">

          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold drop-shadow-lg">
              Products
            </p>

            <p className="text-2xl font-extralight text-gray-100 drop-shadow-lg">
              Hand-crafted, enterprise-grade products, and template kits. Browse all our products
            </p>
          </div>

          <div>
            <input
            className="p-2 w-80 sm:w-96 rounded-3xl shadow-lg"
             type="text"
             placeholder="Search products"
             onChange={() => console.log("changed")} />
          </div>
        </div>
      </section>

      {/* Filter */}
      <section>
        <div className="body-margin text-center flex flex-col gap-16">
          <div className="flex flex-row flex-wrap gap-8 justify-center items-center pb-4 shadow-lg text-sm">
            <span className="flex flex-row gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              filter by:
            </span>
            
            <div>
              <label>
                <span className="mr-2">Category</span>
                <select className="p-2 bg-transparent border shadow-sm" onChange={() => console.log("change")}>
                  <option value="all">All</option>
                    {
                      categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))
                    }
                </select>
              </label>
            </div>
          </div>

          {/* Products list */}
          <div className="flex flex-row flex-wrap gap-8 justify-start">
            {
              products.map((product) => (
                <Card
                  key={product.name}
                  name={product.name}
                  imgSrc={product.imgSrc}
                  alt={product.alt}
                  imgWidth={640}
                  imgHeight={427}
                  price={product.price}
                  shortDesc={product.shortDesc}
                  tags="nfgjsaf"
                  version={product.version}
                />
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Prods;
