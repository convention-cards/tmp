import { FAQ_ITEMS } from "config/faq";

export function FAQSection() {
  return (
    <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
        Frequently asked questions
      </h2>
      <div className="mt-8">
        <dl className="divide-y divide-gray-200 text-justify">
          {FAQ_ITEMS.map((faq) => (
            <div
              key={faq.id}
              className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
            >
              <dt className="text-base font-medium text-gray-900 md:col-span-4">
                {faq.question}
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
