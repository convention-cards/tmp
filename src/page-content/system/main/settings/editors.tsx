import { Avatar } from "components/avatar";
import type { ButtonProps } from "components/buttons/base";
import { PrimaryButton } from "components/buttons/primary";
import { Card } from "components/card";
import { useIsOwner, useSystem } from "hooks/system";
import { useDialog } from "launch";
import { useMemo } from "react";
import { api } from "utils/api";

export function SystemEditorsTable() {
  const { id, editors } = useSystem();
  const launch = useDialog();
  const isOwner = useIsOwner();
  const ctx = api.useContext();
  const remove = api.systemEditors.remove.useMutation({
    onSuccess: () => {
      ctx.system.get.invalidate();
    },
  });

  const actions = useMemo<ButtonProps[]>(
    () =>
      [
        isOwner && {
          onClick: () => launch("addSystemEditor", { editors, systemId: id }),
          text: "Add Editor",
        },
      ].filter(Boolean),
    [launch, id, editors, isOwner]
  );

  return (
    <Card
      title="Editors"
      subtitle="People that can currently view or edit this system"
      id="system-editor-table"
      padding={false}
      headingActions={actions}
    >
      <table className="mb-2 min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Role
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Remove</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {editors.map((editor) => (
            <tr key={editor.id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="flex items-center">
                  <Avatar
                    alt={`${editor.name ?? ""}' image`}
                    size="md"
                    src={editor.image}
                  />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {editor.name}
                    </div>
                    <div className="text-gray-500">{editor.email}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {editor.type}
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                {editor.type !== "Owner" && (
                  <PrimaryButton
                    text="Remove"
                    onClick={() =>
                      remove.mutate({ editorId: editor.id, systemId: id })
                    }
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
