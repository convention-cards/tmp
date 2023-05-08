import type {
  BidDefinition,
  MinMax,
} from "../../../prisma/custom/bid-definition";

type FieldMapType = {
  [i in keyof Required<BidDefinition>]: (o: BidDefinition[i]) => boolean;
};

function MIN_MAX_CHECK(mm: MinMax): mm is MinMax {
  if (mm === undefined) {
    return false;
  }
  return mm.min !== undefined || mm.max !== undefined;
}

function BOOL_CHECK(b: boolean | undefined): b is boolean {
  return b !== undefined && b;
}

const FIELD_MAP = {
  hcp: MIN_MAX_CHECK,
  ltc: MIN_MAX_CHECK,

  c: MIN_MAX_CHECK,
  d: MIN_MAX_CHECK,
  h: MIN_MAX_CHECK,
  s: MIN_MAX_CHECK,
  ma: MIN_MAX_CHECK,
  mi: MIN_MAX_CHECK,

  bal: BOOL_CHECK,
  unbal: BOOL_CHECK,
  art: BOOL_CHECK,
} satisfies FieldMapType;

export function refineBidDefinition(initial: Required<BidDefinition>) {
  const result: BidDefinition = {};

  Object.keys(initial).forEach((i) => {
    const index = i as keyof BidDefinition;
    const checker = FIELD_MAP[index];
    const value = initial[index];

    //@ts-expect-error Not gonna type this
    if (checker(value)) {
      //@ts-expect-error Not gonna type this
      result[index] = value;
    }
  });

  return result;
}
