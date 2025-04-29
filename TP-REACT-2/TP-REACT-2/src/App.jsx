import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Info from '../Pages/Info/Info'
import SobreNosotros from '../Pages/SobreNosotros/SobreNosotros';
import AvisoLegal from '../Pages/AvisoLegal/AvisoLegal';
import Ayuda from '../Pages/Ayuda/Ayuda';
import { ROUTES } from '../const/routes'
import './App.css'

function App() {
  
  const articulo = {
    id: 1,
    nombre: "Memeria",
    precio: 23
  }
  
  return (
    <div>
      <Info articulo={articulo}></Info>

      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={ROUTES.Home}/>

          {/*Footer*/}
          <Route element={<Facebook />} path={ROUTES.facebook}/>
          <Route element={<X />} path={ROUTES.x}/>
          <Route element={<Instagram />} path={ROUTES.instagram}/>
          <Route element={<Logo />} path={ROUTES.logo}/>
          <Route element={<SobreNosotros />} path={ROUTES.sobreNosotros}/>
          <Route element={<AvisoLegal />} path={ROUTES.avisoLegal}/>
          <Route element={<Ayuda />} path={ROUTES.ayuda}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
