import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias ut aliquid commodi dolores totam voluptatum repellat laborum laudantium non.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias ut aliquid commodi dolores totam voluptatum repellat laborum laudantium non.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias ut aliquid commodi dolores totam voluptatum repellat laborum laudantium non.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias ut aliquid commodi dolores totam voluptatum repellat laborum laudantium non.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias ut aliquid commodi dolores totam voluptatum repellat laborum laudantium non.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-gray-200">
          <p className="text-center uppercase text-violet-500">FAQ</p>
          <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
