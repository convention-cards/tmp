"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { api } from "api";
import { PrimaryButton } from "components/buttons/primary";
import { BiddingConventionCard } from "components/conventions/summary-card";
import { Spinner } from "components/spinner";
import { useDialog } from "launch";
import { useMemo, useState } from "react";

export function ConventionList() {
  const { data: conventions } = api.convention.list.useQuery();
  const launch = useDialog();
  const [searchString, setSearchString] = useState("");

  const filteredConventions = useMemo(() => {
    if (conventions == undefined) {
      return undefined;
    }

    return conventions.filter((conv) => conv.name.includes(searchString));
  }, [conventions, searchString]);

  return (
    <div className="space-y-6 ">
      <div className="flex gap-4">
        <div className="relative flex-grow">
          <MagnifyingGlassIcon
            className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="text"
            className="h-12 w-full rounded-md border border-gray-300 bg-white pl-11 pr-4 text-gray-800 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Search conventions..."
            value={searchString}
            onChange={(e) => setSearchString(e.currentTarget.value)}
          />
        </div>
        <PrimaryButton
          text="Add Convention"
          onClick={() => launch("defineConvention", { systemId: id })}
        />
      </div>
      {filteredConventions?.map((convention) => (
        <BiddingConventionCard
          key={convention.id}
          convention={convention}
          prefix=""
        />
      ))}
      {filteredConventions?.length === 0 && (
        <p className="mt-2 text-sm text-gray-600">
          No conventions could be found.
        </p>
      )}

      {filteredConventions === undefined && <Spinner />}
    </div>
  );
}
