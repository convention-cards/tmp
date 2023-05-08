import { env } from "env/client.mjs";
import { useField } from "formik";

export function DebugForm() {
  const [field] = useField("");

  if (env.NEXT_PUBLIC_NODE_ENV !== "development") {
    return null;
  }

  return <pre>{JSON.stringify(field.value, undefined, 2)}</pre>;
}
