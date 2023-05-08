"use client";

import type { NBO } from "@prisma/client";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { NBO_TO_COUNTRY, NBO_TO_IMG_URL, NBO_TO_PREFIX } from "config/nbo";
import { env } from "env/client.mjs";
import { useSystem } from "hooks/system";
import Image from "next/image";
import { useState } from "react";

interface Props {
  nbo: NBO;
  conventionCard: {
    createdAt: Date;
  } | null;
}
export function ConventionCardRow({ nbo }: Props) {
  const { slug } = useSystem();
  const [recentlyCopied, setRecentlyCopied] = useState(false);
  // const generated = conventionCard !== null;
  const generated = true;

  const url = `${env.NEXT_PUBLIC_BASE_URL}/system/${slug}/${NBO_TO_PREFIX[nbo]}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setRecentlyCopied(true);

    setTimeout(() => {
      setRecentlyCopied(false);
    }, 3000);
  };

  return (
    <tr key={nbo}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        <div className="flex items-center">
          <Image
            className="h-12 w-12 rounded-full"
            src={NBO_TO_IMG_URL[nbo]}
            alt={`${nbo} Logo`}
            width={100}
            height={100}
          />
          <div className="ml-4">
            <div className="font-medium text-gray-900">{nbo}</div>
            <div className="text-gray-500">{NBO_TO_COUNTRY[nbo]}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {!generated && "Not generated"}
        {/* {generated &&
          `Created on ${dtFormat(conventionCard.createdAt).format("LL")}`} */}
      </td>
      <td className="w-48 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {generated && (
          <SecondaryButton
            text={recentlyCopied ? "Copied!" : "Copy to Clipboard"}
            onClick={copyToClipboard}
            disabled={recentlyCopied}
          />
        )}
      </td>
      <td className="relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        {!generated && (
          <PrimaryButton text="Generate" href={url + "/generate"} />
        )}
        {generated && <SecondaryButton text="View" href={url} />}
        {generated && <PrimaryButton text="Edit" href={url + "/edit"} />}
      </td>
    </tr>
  );
}
