import './App.css'
import { Route, Routes, useLocation} from 'react-router-dom'

import Header from './components/Header/Header'
import Landing from './views/Landing'
import HomePage from './views/Home/Home'
import Detail from './views/Detail/Detail'

function App() {
  const {pathname} = useLocation()

  return (
    <>
      { pathname !== '/' && <Header/>}
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/pokemons" element={<HomePage />}/>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
