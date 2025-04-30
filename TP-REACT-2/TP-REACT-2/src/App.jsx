import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter} from 'react-router';
import Home from '../Pages/Home/Home';
import Info from '../Pages/Info/Info'
//import SobreNosotros from '../Pages/SobreNosotros/SobreNosotros';
//import AvisoLegal from '../Pages/AvisoLegal/AvisoLegal';
//import Ayuda from '../Pages/Ayuda/Ayuda';
import { ROUTES } from '../const/routes'
import './App.css'
import Favoritos from '../Pages/Favoritos/Favoritos';

function App() {
  const articulo = {
    id: 1,
    nombre: "Memoria",
    precio: 23,
    imagen: "https://acdn-us.mitiendanube.com/stores/001/156/703/products/disco-solido-nvme-1tb-wd-black-sn850-con-disipador-m2-gen4-copia-877e7aaa41601763ed17274715886318-1024-1024.webp"
  }


  return (
    <div>
      

      <BrowserRouter>     
        <Routes>
          <Route element={<Home />} path={ROUTES.home}/>
          <Route element={<Info articulo={articulo}/>} path={ROUTES.info}/>
          <Route element={<Favoritos/>} path={ROUTES.favoritos} />
          {/*Footer
          <Route element={<Facebook />} path={ROUTES.facebook}/>
          <Route element={<X />} path={ROUTES.x}/>
          <Route element={<Instagram />} path={ROUTES.instagram}/>
          <Route element={<Logo />} path={ROUTES.logo}/>
          <Route element={<SobreNosotros />} path={ROUTES.sobreNosotros}/>
          <Route element={<AvisoLegal />} path={ROUTES.avisoLegal}/>
          <Route element={<Ayuda />} path={ROUTES.ayuda}/>    */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
