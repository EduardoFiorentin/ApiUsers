import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Home } from './Pages/Home/Home'
import { ListUsers } from './Pages/ListUsers/ListUsers'
import { Login } from './Pages/Login/Login'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/ListUsers" element={<ListUsers />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
