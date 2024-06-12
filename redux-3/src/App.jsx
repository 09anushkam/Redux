import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'
import Users from './Components/Users'


const App = () => {
  return (
    <div className='w-screen h-screen'>
      <nav className='py-5 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App