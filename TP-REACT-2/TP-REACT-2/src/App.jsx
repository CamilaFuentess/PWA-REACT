
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '../Pages/Home/Home';
import Info from '../Pages/Info/Info'
import { ROUTES } from '../const/routes'
import './App.css'
import Favoritos from '../Pages/Favoritos/Favoritos';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';

function App() {

  return (
    <div className="w-screen flex flex-col min-h-screen  bg-[#e1e8ef] justify-self-center">
      <Header />  
      <main className='flex-grow'> 
        <Routes>
          <Route element={<Home />} path={ROUTES.home}/>
          <Route element={<Info />} path={ROUTES.info}/>
          <Route element={<Favoritos/>} path={ROUTES.favoritos} />
        </Routes>
      </main>
      <Footer />      
 
    </div>
  )
}

export default App
