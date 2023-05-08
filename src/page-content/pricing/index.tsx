import { PricingTiers } from "config/pricing-tiers";
import { PeriodSelector } from "./period-selector";
import { PricingTierCard } from "./tier-card";

export function PricingSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
      <div className="sm:align-center sm:flex sm:flex-col">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">
          Pricing Plans
        </h1>
        <p className="mt-5 text-xl text-gray-500 sm:text-center">
          Build your first two systems for free, then upgrade to unlock
          additional features.
        </p>
        <PeriodSelector></PeriodSelector>
      </div>
      <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl lg:grid-cols-3 xl:mx-0 xl:max-w-none">
        {PricingTiers.map((tier) => (
          <PricingTierCard key={tier.name} {...tier} />
        ))}
      </div>
    </div>
  );
}
