import { max } from "./max";
import { min } from "./min";

export const midRange = (data: number[]) => max(data) - min(data) / 2;
