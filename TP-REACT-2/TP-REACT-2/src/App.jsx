
import { BrowserRouter, Routes, Route } from 'react-router';
import { ROUTES } from '../const/routes'
import Home from '../Pages/Home/Home';
import Info from '../Pages/Info/Info'
import Category from '../Pages/Categoria/Categoria';
import Favoritos from '../Pages/Favoritos/Favoritos';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';
import './App.css'

function App() {

  return (
            <BrowserRouter>  
    <div className="w-screen flex flex-col min-h-screen  bg-[#000000] justify-self-center">
      <Header />  
      <main className='flex-grow'> 
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<Home />} path={ROUTES.home}/>
          <Route element={<Info />} path={ROUTES.info}/>
          <Route element={<Favoritos />} path={ROUTES.favoritos} />
          <Route element={<Category />} path={ROUTES.category} />
        </Routes>
      </main>
      <Footer />      
 
    </div>
            </BrowserRouter>  
  )
}

export default App
