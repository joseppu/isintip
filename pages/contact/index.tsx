import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const contact = () => {
  return (
    <>
      <Head>
        <title>Isintip Biotechnology, Get in touch</title>
        <meta
          name="description"
          content="Isintip Biotechnology has been active in both domestic and international markets for more than 20 years. With this expertise and experience, we are able to provide the best results to our clients."
        />
        <meta
          property="og:title"
          content="Isintip Biotechnology, Get in touch"
        />
        <meta property="og:url" content="http://www.isin-tip.com/contact" />
        <meta
          property="og:description"
          content="Isintip Biotechnology has been active in both domestic and international markets for more than 20 years. With this expertise and experience, we are able to provide the best results to our clients."
        />
        <meta property="og:image" content="/biochemistry-lab.jpg" />
      </Head>
      <Navbar />

      <div className="py-12">
        <div className="relative z-10 max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Get in touch
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-600">
            Isintip Biotechnology has been active in both domestic and
            international markets for more than 20 years. With this expertise
            and experience, we are able to provide the best results to our
            clients.
          </p>
        </div>
      </div>

      <section className="relative max-w-5xl mx-auto text-gray-600 sm:px-6 body-font lg:px-8">
        <div className="absolute inset-0 px-4 sm:px-6 lg:px-8">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323742.5953333192!2d29.137912560658403!3d41.07360364376489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd046628c4b5b585a!2zScWfxLFuLVTEsXAgQXJhxZ90xLFybWEgw5xyw7xubGVyaSBMdGQuIMWedGku!5e0!3m2!1str!2str!4v1551293728268"
          ></iframe>
        </div>
        <div className="container flex px-5 py-24 mx-auto">
          <form
            action="https://formsubmit.co/info@isin-tip.com"
            method="POST"
            className="relative z-10 flex flex-col w-full p-8 mt-10 ml-auto bg-white rounded-lg shadow-md lg:w-1/3 sm:w-1/2 md:w-1/2 md:mt-0"
          >
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
              Contact us
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              You can reach us by filling this form or from numbers and emails
              provided below
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 text-lg text-white border-0 rounded bg-violet-500 focus:outline-none hover:bg-violet-600"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <section aria-labelledby="offices-heading">
        <div className="max-w-5xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8">
          <h2
            id="offices-heading"
            className="text-3xl font-extrabold text-gray-800"
          >
            Our Offices
          </h2>
          <p className="max-w-3xl mt-6 text-lg text-gray-600">
            With our main office situated in Istanbul, we are serving all around
            the world.
          </p>
          <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-warm-gray-900">
                Istanbul
              </h3>
              <p className="mt-2 text-base text-warm-gray-500">
                <span className="block">
                  Aziz Mahmut Hüdayi Mahallesi, Bakıcı Sk. No: 1 Daire: 4 <br />{" "}
                  Üsküdar/İstanbul 34000 TÜRKİYE{" "}
                </span>
                <span className="block">
                  Mobile:{" "}
                  <a className="hover:text-violet-600" href="tel:+905068928209">
                    {" "}
                    +90 506 892 82 09
                  </a>
                </span>
                <span className="block">
                  Phone:{" "}
                  <a className="hover:text-violet-600" href="tel:+902162012124">
                    +90 216 201 21 24
                  </a>
                </span>
                <span className="block">
                  Fax:{" "}
                  <a className="hover:text-violet-600" href="tel:+902162012126">
                    +90 216 201 21 26
                  </a>
                </span>
                <span className="block">
                  Email:{" "}
                  <a
                    className="hover:text-violet-600"
                    href="mailto:info@isin-tip.com"
                  >
                    {" "}
                    info@isin-tip.com
                  </a>
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-warm-gray-900">Ankara</h3>
              <p className="mt-2 text-base text-warm-gray-500">
                <span className="block">
                  Ziya Gökalp Cad. İcel Sk. Erdim Apt. Bina No: 7 Daire: 10{" "}
                  <br />
                  Kızılay/Ankara 06100 TÜRKİYE
                </span>
                <span className="block">
                  Phone:{" "}
                  <a className="hover:text-violet-600" href="tel:+903124197738">
                    {" "}
                    +90 312 419 77 38{" "}
                  </a>
                </span>
                <span className="block">
                  Email:{" "}
                  <a
                    className="hover:text-violet-600"
                    href="mailto:info@isin-tip.com"
                  >
                    {" "}
                    info@isin-tip.com
                  </a>
                </span>

                <span className="block">
                  Email:{" "}
                  <a
                    className="hover:text-violet-600"
                    href="mailto:teklif@isin-tip.com"
                  >
                    teklif@isin-tip.com
                  </a>
                </span>
                <span className="block">
                  Email:{" "}
                  <a
                    className="hover:text-violet-600"
                    href="mailto:ibrikci@yandex.com"
                  >
                    ibrikci@yandex.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default contact;
