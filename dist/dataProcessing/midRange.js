import { max } from "./max";
import { min } from "./min";
export const midRange = (data) => max(data) - min(data) / 2;
