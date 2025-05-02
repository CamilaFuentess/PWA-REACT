import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter} from 'react-router';
import Home from '../Pages/Home/Home';
import Info from '../Pages/Info/Info'
import { ROUTES } from '../const/routes'
import './App.css'
import Favoritos from '../Pages/Favoritos/Favoritos';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';

function App() {
  const articulo1 = {
    id: 1,
    nombre: "Memoria",
    precio: 23,
    imagen: "https://acdn-us.mitiendanube.com/stores/001/156/703/products/disco-solido-nvme-1tb-wd-black-sn850-con-disipador-m2-gen4-copia-877e7aaa41601763ed17274715886318-1024-1024.webp"
  }
  const articulo = {
    id: "1",
    name: "AMD Ryzen 5 5600X",
    coverImage: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000065BOX_800.jpg",
    categoria: "Procesador",
    descripcion: "CPU de 6 núcleos ideal para gaming y tareas exigentes.",
    precio: 85000
  }



  return (
    <div className="w-screen flex flex-col min-h-screen  bg-[#e1e8ef] justify-self-center">
      <Header />  
      <main className='flex-grow'> 
        <Routes>
          <Route element={<Home />} path={ROUTES.home}/>
          <Route element={<Info articulo={articulo}/>} path={ROUTES.info}/>
          <Route element={<Favoritos/>} path={ROUTES.favoritos} />
        </Routes>
      </main>
      <Footer />      
 
    </div>
  )
}

export default App
