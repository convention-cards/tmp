import type { BidDefinition } from "../../../prisma/custom/bid-definition";

type RangeType = {
  min?: number;
  max?: number;
};
export function convertRangeToString({ min, max }: RangeType) {
  if (min === undefined) {
    if (max == undefined) {
      return "";
    } else {
      return `≤${max}`;
    }
  } else {
    if (max == undefined) {
      return `${min}+`;
    } else {
      if (min === max) {
        return `${min}`;
      }

      return `${min}-${max}`;
    }
  }
}

export function defToString(definition: BidDefinition) {
  const parts: string[] = [];

  if (definition.bal === true) {
    parts.push("Balanced");
  }
  if (definition.unbal === true) {
    parts.push("Unbalanced");
  }
  if (definition.art === true) {
    parts.push("Artificial");
  }

  if (definition.c !== undefined) {
    parts.push(`${convertRangeToString(definition.c)}!c`);
  }
  if (definition.d !== undefined) {
    parts.push(`${convertRangeToString(definition.d)}!d`);
  }
  if (definition.h !== undefined) {
    parts.push(`${convertRangeToString(definition.h)}!h`);
  }
  if (definition.s !== undefined) {
    parts.push(`${convertRangeToString(definition.s)}!s`);
  }
  if (definition.ma !== undefined) {
    parts.push(`${convertRangeToString(definition.ma)}M`);
  }
  if (definition.mi !== undefined) {
    parts.push(`${convertRangeToString(definition.mi)}m`);
  }

  if (definition.hcp !== undefined) {
    parts.push(`${convertRangeToString(definition.hcp)} HCP`);
  }
  if (definition.ltc !== undefined) {
    parts.push(`${convertRangeToString(definition.ltc)} LTC`);
  }

  return parts.join(", ");
}
