import type {Metal, Weld, Thickness} from '../types/index'

export const metals:Metal[] = [
  {
    id: 1,
    name: 'Сталь углеродистая',
    density: 7850,
    pricePerKg: 85
  },
  {
    id: 2,
    name: 'Нержавеющая сталь',
    density: 7900,
    pricePerKg: 380
  },
  {
    id: 3,
    name: 'Алюминий',
    density: 2700,
    pricePerKg: 280
  },
  {
    id: 4,
    name: 'Медь',
    density: 8960,
    pricePerKg: 950
  },
  {
    id: 5,
    name: 'Титан',
    density: 4540,
    pricePerKg: 3200
  },
  {
    id: 6,
    name: 'Чугун',
    density: 7200,
    pricePerKg: 75
  },
  {
    id: 7,
    name: 'Никелевые сплавы',
    density: 8900,
    pricePerKg: 2100
  }
];

export const weld: Weld[] = [
  {
    id: 1,
    name: 'MMA',
    price: 150
  },
  {
    id: 2,
    name: 'MIG',
    price: 250
  },
  {
    id: 3,
    name: 'TIG',
    price: 600
  }
]
export const thickness: Thickness[] = [
  {
    id:1,
    thickness: 0
  },
  {
    id:2,
    thickness: 1
  },
  {
    id:3,
    thickness: 2
  },
  {
    id:4,
    thickness: 3
  },
  {
    id:5,
    thickness: 4
  },
  {
    id:6,
    thickness: 5
  },
] 
