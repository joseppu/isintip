import Link from "next/link";

const faqs = [
  {
    question:
      "We are in the process of founding a lab, would you be able to assist us in this?",
    answer:
      "We would be glad to assist in that. There are also certain packages and discounts that help new labs by providing labware and lab supplies. ",
  },
  {
    question: "How do I contact technical support?",
    answer:
      "For questions related to delivery and product or questions that require expert scientists help you might take a look at our contact page.",
  },
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="max-w-5xl px-6 py-16 mx-auto sm:px-8 lg:py-20 lg:px-10">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <Link href="/contact">
                <a className="font-medium text-violet-600 hover:text-violet-500">
                  customer support
                </a>
              </Link>{" "}
              team.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
