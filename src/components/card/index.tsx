import type { ButtonProps } from "components/buttons/base";
import { Spinner } from "components/spinner";
import type { ReactNode } from "react";
import { CardHeading } from "./heading";
import type { CardPrimaryActionProps } from "./primary-action";
import { CardPrimaryAction } from "./primary-action";

interface Props {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;

  primaryAction?: CardPrimaryActionProps;
  headingActions?: ButtonProps[];
  substituteHeading?: ReactNode;

  padding?: boolean;
  loading?: boolean;
}

export function Card({
  id,
  title = "",
  subtitle = "",
  children,
  primaryAction,
  headingActions,
  substituteHeading,
  padding = true,
  loading = false,
}: Props) {
  return (
    <section aria-labelledby={id}>
      <div className="border border-black border-opacity-20 bg-white shadow sm:rounded-lg">
        {title !== "" && (
          <CardHeading
            id={id}
            title={title}
            subtitle={subtitle}
            headingActions={headingActions}
          />
        )}
        {substituteHeading}

        <div className={`border-t border-gray-200 ${padding ? "p-6" : ""}`}>
          {loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            children
          )}
        </div>
        {primaryAction !== undefined && (
          <CardPrimaryAction {...primaryAction} />
        )}
      </div>
    </section>
  );
}
