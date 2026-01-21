import type { Metal, CalculationInput } from "../types";

export const CalculateWeight = (input: CalculationInput, selctedMetal: Metal): number => {
    const volume = (input.length / 1000) * (input.thickness / 1000);
    return volume * selctedMetal.density
}