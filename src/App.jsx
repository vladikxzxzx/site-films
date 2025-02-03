import './css/App.css'
import Films from './pages/Films'
import Serials from './pages/Serials'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {


  return (
    
    <BrowserRouter basename="/site-films">
        <Routes>
          <Route path='/serials' element={<Serials/>}/>
          <Route path='/films' element={<Films/>}/>
          <Route path="*" element={<Navigate to="/serials" />} />
        </Routes>
    </BrowserRouter>

  )
}

export default App
