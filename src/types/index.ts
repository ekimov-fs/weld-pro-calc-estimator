export interface Weld {
    id: number;
    name: string;
    price: number;
}

export interface Metal {
    id: number;
    name: string;
    density: number;
    pricePerKg: number;
}

export interface CalculationInput {
    metalId: string;
    length: number;
    width: number;
    thickness: number;
    weldLength: number;
    weldType: WeldType;
}

export interface Dimensions{
    length: number;
    width: number;
    thickness: number;
    weldLength:number;
}

export interface Thickness{
    id: number;
    thickness: number;
}