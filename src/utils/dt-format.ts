import dayjs from "dayjs";
import localisedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.extend(localisedFormat);

export const dtFormat = dayjs;
