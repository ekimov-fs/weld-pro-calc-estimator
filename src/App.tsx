import React, { useState } from 'react'
import './App.css'
import type {  Metal, Dimensions } from './types'

const metals:Metal[] = [
  {
    id: 1,
    name: 'Сталь',
    density: 7850,
    pricePerKg: 80
  },
  {
    id: 2,
    name: 'Алюминий',
    density: 2700,
    pricePerKg: 350
  }
]

function App() {

  const [selectedMetal, setSelectedMetal] = useState<Metal>(metals[0]);
  const [demensions, setDemensions] = useState<Dimensions>({
    length: 0,
    width: 0,
    thickness: 0
  });

// ---------------

  const handleSelectedMetal = (e) => {
    const id = Number(e.target.value) 
    const foundMetal = metals.find(m => m.id === id) 
    
    if(foundMetal){
      setSelectedMetal(foundMetal);
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
  return (

    <>
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
        <input 
          type="number" 
          name='thickness'  
          placeholder='Толщина в мм'
          onChange={handleDemensions}
        />
        
        <select onChange={handleSelectedMetal}>
          {metals.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ) )}
          
        </select>
      </form>

      <div style={{ marginTop: '20px' }}>

        <h3>Выбрано: {selectedMetal.name}</h3>
        <p>Плотность: {selectedMetal.density} кг/м³</p>
        <p>Цена: {selectedMetal.pricePerKg} руб/кг</p>
        <p>Вес заготвки: {weight.toFixed(2)}</p>
        <p>Стоимость заготовки: {price}</p>
      </div>
      
    </>
  )
}

export default App
