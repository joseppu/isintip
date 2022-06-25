import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";

const ProductHero = () => {
  const heroProductSearchRef = useRef("");
  const router = useRouter();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const { value } = e.currentTarget;
      router.push(`/products?page=0&search=${value}`);
    }
  };
  const handleClick = () => {
    const { value } = heroProductSearchRef.current;
    if (value === "") {
      return;
    } else {
      router.push(`/products?page=0&search=${value}`);
    }
  };

  return (
    <section className="max-w-5xl mx-auto text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-4xl font-medium text-gray-900 sm:text-5xl">
            Delivering cutting edge bio-tech
          </h1>
          <p className="mb-8 leading-relaxed">
            Biomedical research is time consuming enough, getting the supplies
            should be easier. Search through our wide range of biomedical
            supplies.
          </p>
          <div className="flex items-center justify-center flex-1 lg:justify-end">
            <div className="w-full max-w-lg">
              <label htmlFor="heroProductSearch" className="sr-only">
                Search
              </label>
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    ref={heroProductSearchRef}
                    id="heroProductSearch"
                    name="heroProductSearch"
                    className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <button
                  onClick={handleClick}
                  className="inline-flex px-2 py-2 ml-1 text-white border-0 rounded sm:px-6 bg-violet-600 focus:outline-none hover:bg-violet-700"
                >
                  Now
                </button>
              </div>
            </div>
          </div>
          <p className="w-full mt-2 mb-8 text-sm text-violet-400 md:ml-1">
            More than 850,000 products available
          </p>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="biochemistry lab"
            src="/biochemistry-lab.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
