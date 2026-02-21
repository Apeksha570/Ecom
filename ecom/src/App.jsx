import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ResponsiveAppBar from './components/Navbar'
import Footer from './components/Footer'
import SingleView from './pages/SingleView'
import Products from './pages/Products'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  {/** name of this tag is empty fragment  i.e <> </>*/}
      <BrowserRouter>
      <ResponsiveAppBar/>  {/** call the navbar inside the browser so use <ResponsiveAppBar/> inside the <BrowserRouter> tag */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/> 
        <Route path='/singleView/:id' element={<SingleView/>}/>
        <Route path='/about' element={<About/>}/>  
        <Route path='/register' element={<Register/>}/> 
        <Route path='/login' element={<Login/>}/>   
      </Routes>
       <Footer/>  {/**put the footer also inside the browser */}
      </BrowserRouter> 
    </>
  )
}{/**Routes holds one part  */}

export default App
