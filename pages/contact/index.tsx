import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const contact = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="py-12 lg:py-16">
          <div className="relative z-10 max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="max-w-3xl mt-6 text-xl text-warm-gray-500">
              Vel nunc non ut montes, viverra tempor. Proin lectus nibh
              phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis
              et vel et fermentum amet consequat.
            </p>
          </div>
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
          <div className="relative z-10 flex flex-col w-full p-8 mt-10 ml-auto bg-white rounded-lg shadow-md lg:w-1/3 sm:w-1/2 md:w-1/2 md:mt-0">
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
              Feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
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
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
                className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              Button
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
      <section aria-labelledby="offices-heading">
        <div className="max-w-5xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8">
          <h2
            id="offices-heading"
            className="text-3xl font-extrabold text-warm-gray-900"
          >
            Our Offices
          </h2>
          <p className="max-w-3xl mt-6 text-lg text-warm-gray-500">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
          <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-warm-gray-900">
                Istanbul
              </h3>
              <p className="mt-2 text-base text-warm-gray-500">
                <span className="block">
                  Aziz Mahmut Hüdayi Mahallesi Bakıcı Sk. No:1 Daire: 4 Üsküdar
                  / İstanbul / TÜRKİYE Aziz Mahmut Hüdayi - Üsküdar 34000
                  Türkiye
                </span>
                <span className="block">Phone: +90 216 201 21 24</span>
                <span className="block">Fax: +90 216 201 21 26</span>
                <span className="block">Handy: +90 506 892 82 09</span>
                <span className="block">Email: info@isin-tip.com</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-warm-gray-900">Ankara</h3>
              <p className="mt-2 text-base text-warm-gray-500">
                <span className="block">
                  Ziya Gökalp Cad. İcel Sk. Erdim Apt. Bina No:7 Kat:3 Daire 10
                  Kızılay-Ankara 06100 Türkiye
                </span>
                <span className="block">Phone: +90 312 419 77 38</span>
                <span className="block">Email: teklif@isin-tip.com</span>
                <span className="block">Email: ibrikci@yandex.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default contact;
