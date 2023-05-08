import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { Avatar } from "components/avatar";
import { Card } from "components/card";
import { Spinner } from "components/spinner";
import { useField } from "formik";
import Link from "next/link";
import { useState } from "react";
import { api } from "utils/api";

interface PartnerSelectorProps {
  id: string;
  name: string;
  image: string;
  search: string;
}

function PartnerSelector({ id, name, image, search }: PartnerSelectorProps) {
  const [field, _, helpers] = useField<string[]>("partners");

  const selected = field.value.includes(id);

  if (
    search !== "" &&
    !selected &&
    !name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ) {
    return null;
  }

  const divClasses = classNames(
    "relative flex items-center justify-between p-4 cursor-pointer rounded-md border border-gray-300 shadow",
    !selected && " hover:bg-gray-50",
    selected && "bg-green-100 hover:bg-green-200"
  );

  return (
    <div
      className={divClasses}
      tabIndex={0}
      onClick={() => {
        if (selected) {
          helpers.setValue(field.value.filter((v) => v !== id));
        } else {
          helpers.setValue([...field.value, id]);
        }
      }}
    >
      <div className="flex h-8 items-center gap-4 font-medium text-gray-700">
        <Avatar alt={`${name}'s Logo`} src={image} />
        {name}
      </div>
      {selected && <CheckIcon className="h-8 w-8 text-green-500" />}
    </div>
  );
}

export function NewSystemPartnerForm() {
  const { data: partners } = api.partner.list.useQuery();
  const [searchString, setSearchString] = useState("");

  return (
    <Card id="new-cc-partner">
      <div className="h-full md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Partners
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Please select which partners you would like to share this system
            with. This list can be changed at any time from the
            &lsquo;Settings&rsquo; section of the system editor.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Your partners will be able to view and edit the system, but as you
            are the owner it will be linked to your account for payment
            purposes.
          </p>
        </div>
        <div className="mt-5 flex max-h-full flex-col gap-4 md:col-span-2 md:mt-0">
          <div className="relative">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="text"
              className="h-12 w-full rounded-md border border-gray-300 bg-gray-100 pl-11 pr-4 text-gray-800 placeholder-gray-500  focus:ring-0 sm:text-sm"
              placeholder="Search..."
              value={searchString}
              onChange={(e) => setSearchString(e.currentTarget.value)}
            />
          </div>
          <fieldset className="grow">
            <div className="max-h-64 min-h-[16rem] space-y-2 overflow-hidden overflow-y-auto border-gray-200">
              {partners?.map((partner, index) => (
                <PartnerSelector
                  key={index}
                  name={partner.name ?? ""}
                  id={partner.id}
                  image={partner.image ?? ""}
                  search={searchString}
                />
              ))}
              {partners === undefined && <Spinner />}
              {partners?.length === 0 && (
                <p className="text-sm text-gray-600">
                  You have not added any partners. To send a request see the{" "}
                  <Link href="/partners">Partners</Link> page.
                </p>
              )}
            </div>
          </fieldset>
        </div>
      </div>
    </Card>
  );
}
