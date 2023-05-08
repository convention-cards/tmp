import { NBO } from "@prisma/client";
import { NBO_TO_IMG_URL } from "config/nbo";
import Image from "next/image";

export function EBUPartnershipNames() {
  return (
    <div className="flex space-x-6">
      <Image
        className="h-12 w-12 rounded-full"
        src={NBO_TO_IMG_URL[NBO.EBU]}
        alt={`EBU Logo`}
        width={100}
        height={100}
      />
      <table className="grow">
        <tbody>
          <tr>
            <td className="min-w-[5rem]">Name</td>
            <td className="w-full">Jonathan Clark</td>
            <td className="min-w-[5rem]">EBU No.</td>
            <td>476335</td>
          </tr>
          <tr>
            <td>Partner</td>
            <td>Aaron Hutton</td>
            <td>EBU No.</td>
            <td>480477</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
