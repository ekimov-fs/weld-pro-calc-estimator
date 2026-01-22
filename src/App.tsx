import { useState } from 'react';

import './App.css'
import type {  Metal, Dimensions, Weld, Thickness } from './types'

const metals:Metal[] = [
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

const weld: Weld[] = [
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

const thickness: Thickness[] = [
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


function App() {

  const [selectedMetal, setSelectedMetal] = useState<Metal>(metals[0]);
  const [weldTypes, setWeldTypes] = useState<Weld>(weld[0])
  const [demensions, setDemensions] = useState<Dimensions>({
    length: 0,
    width: 0,
    thickness: 0,
    weldLength: 0
  });

// ---------------

  const handleSelectedMetal = (e) => {
    const id = Number(e.target.value) 
    const foundMetal = metals.find(m => m.id === id) 
    
    if(foundMetal){
      setSelectedMetal(foundMetal);
    }
  }

  const handleWeldTypes = (e) => {
    const id = Number(e.target.value) 
    const typeWeld = weld.find(m => m.id === id) 
    
    if(typeWeld){
      setWeldTypes(typeWeld);
    }
  }


  const handleDemensions = (e) => {
  const {name, value} = e.target
    setDemensions(prev => ({
      ...prev,
      [name] : Number(value)
    }))

  }

// ============

  const weight = (demensions.length*demensions.width*demensions.thickness*selectedMetal.density)/1000000000;
  const price = weight*(selectedMetal.pricePerKg)
  let priceWeld;
  
  demensions.length ? priceWeld = (demensions.weldLength / 1000)*weldTypes.price : priceWeld = 0;


  const itog = priceWeld + price
  
  
  return (

    <>
    <div className="forms">
      <form>
        <input 
          type="number" 
          name='length'  
          placeholder='Длинна в мм'
          onChange={handleDemensions}
        />
        <input 
          type="number" 
          name='width'  
          placeholder='Ширина в мм'
          onChange={handleDemensions}
        />

        <select onChange={handleDemensions} name="thickness">
          {thickness.map((m) =>(
            <option value={m.id}>{m.thickness} мм</option>
          ))}
        </select>
        
        <select onChange={handleSelectedMetal}>
          {metals.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
          
        </select>

        <input 
          type="number" 
          name='weldLength'  
          placeholder='Длинна шва в мм'
          onChange={handleDemensions}
        />

        <select onChange={handleWeldTypes}>
          {weld.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
      </form>

      <div className='panel'>
        <div className="metSvo">
          <h3>Выбрано: {selectedMetal.name}</h3>
          <p>Плотность: {selectedMetal.density} кг/м³</p>
          <p>Цена: {selectedMetal.pricePerKg} руб/кг</p>
          <p>Вес заготовки: {weight.toFixed(2)} кг</p>        <p>Стоимость заготовки: {price.toFixed(0)} руб</p>  
        </div>
        <div className="weld">
          <h3>Выбор сварки</h3>
          <p>Тип сварки: {weldTypes.name}</p>
          <p>Стоимость 1м сварного шва: {priceWeld.toFixed(0)} руб</p>
          <p>Итоговый чек: {itog.toFixed(0)} руб</p>
        </div>


      </div>
    </div>

      
    </>
  )
}

export default App
