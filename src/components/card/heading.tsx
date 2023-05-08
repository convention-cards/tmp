import type { ButtonProps } from "components/buttons/base";
import { PrimaryButton } from "components/buttons/primary";
import { formatSuitString } from "utils/bridge/format-suit-string";

interface Props {
  id: string;
  title: string;
  subtitle: string;

  headingActions?: ButtonProps[];
}

export function CardHeading({
  id,
  title,
  subtitle,
  headingActions = [],
}: Props) {
  return (
    <div className="flex items-center">
      <div className="grow px-4 py-5 sm:px-6">
        <h2 id={id} className="text-lg font-medium leading-6 text-gray-900">
          {formatSuitString(title)}
        </h2>
        {subtitle !== "" && (
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {formatSuitString(subtitle)}
          </p>
        )}
      </div>
      <div className="ms:space-x-6 space-x-4 px-4 sm:px-6">
        {headingActions.map((props, index) => (
          <PrimaryButton key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
