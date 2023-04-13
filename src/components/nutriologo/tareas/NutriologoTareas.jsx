import React from 'react'
import Tarea from './Tarea'

function NutriologoTareas() {
  return (
    <div className='flex h-full flex gap-3 overflow-x-scroll'>
      <Tarea />
      <Tarea />
      <Tarea />
      <Tarea />
      <Tarea />
    </div>
  )
}

export default NutriologoTareas