import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Login } from './Components/Pages/Login/Login'
import { UserStorage } from './UserContext'
import { User } from './Components/User/User'
import { ProtectedRoute } from './Components/Helper/ProtectedRoute'
import { Photo } from './Components/Photo/Photo'
import { UserProfile } from './Components/User/UserProfile'
import { NotFound } from './Components/NotFound'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
