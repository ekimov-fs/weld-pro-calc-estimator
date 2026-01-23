import { useState } from 'react';
import './App.css'
import type {  Metal, Dimensions, Weld, Thickness } from './types'
import {metals, weld, thickness} from './spisok/spisok'

import Select from './components/Select';

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
  const priceWeld = demensions.weldLength ? (demensions.weldLength / 1000) * weldTypes.price : 0;
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
        
        <Select handle={handleDemensions} data={thickness}/>

        <Select handle={handleSelectedMetal} data={metals}/>

        <input 
          type="number" 
          name='weldLength'  
          placeholder='Длинна шва в мм'
          onChange={handleDemensions}
        />

        <Select handle={handleWeldTypes} data={weld}/>

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
