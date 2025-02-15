import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/style/main.css'
import App from './App'
import Popular from './page/Popular'
import Home from './page/Home'
import Person from './page/Person'
import Movie from './page/Movie'
import Tv_show from './page/Tv_show'
import Mtv from './page/Mtv'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/person/:id' element={<Person />}/>
          <Route path='/movie/:type' element={<Movie />}/>
          <Route path='/tv/:type' element={<Tv_show />}/>
          <Route path='/mtv/:id' element={<Mtv />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)