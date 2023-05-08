import { CheckIcon as CheckIconMini } from "@heroicons/react/20/solid";

interface Props {
  name: string;
  description: string;
  price: string;
  href: string;
  cta: string;
  features: string[];
}

export function PricingTierCard({
  name,
  description,
  price,
  href,
  cta,
  features,
}: Props) {
  return (
    <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">{name}</h2>
        <p className="mt-4 h-12 text-sm text-gray-500">{description}</p>
        <p className="mt-8">
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            {price}
          </span>{" "}
          <span className="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href={href}
          className="mt-8 block w-full rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700"
        >
          {cta}
        </a>
      </div>
      <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">
          What&apos;s included
        </h3>
        <ul role="list" className="mt-6 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex space-x-3">
              <CheckIconMini
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
