import { useState } from 'react'
import Info from '../Pages/Info/Info'
import './App.css'

function App() {
  
  const articulo = {
    id: 1,
    nombre: "Memeria",
    precio: 23
  }
  
  return (
    <>
      <Info articulo={articulo}></Info>
    </>
  )
}

export default App
