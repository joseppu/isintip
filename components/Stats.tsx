export default function Stats() {
  return (
    <div className="bg-violet-700">
      <div className="max-w-5xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by institutions from over 15 countries
          </h2>
          <p className="mx-4 mt-3 text-xl md:mx-10 text-violet-200 sm:mt-4">
          Delivering on time for more than <span className="font-semibold">20 years</span>, we are proud being part of the biomedical research ecosystem
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-violet-100">
              Satisfaction
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-violet-100">
              Delivery
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-violet-100">
              Units Ordered
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              500k+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
