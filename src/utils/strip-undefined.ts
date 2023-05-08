export function stripUndefined<T, A extends { [i: string]: T | undefined }>(
  input: A
): Required<A> {
  const result: unknown = {};

  Object.entries(input).forEach(([k, v]) => {
    if (v !== undefined) {
      //@ts-expect-error This works
      result[k] = v;
    }
  });
  return result as Required<A>;
}
