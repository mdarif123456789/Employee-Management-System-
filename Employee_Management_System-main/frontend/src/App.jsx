
import './App.css'
import {Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import CreateEmployeePage from './pages/CreateEmployeePage'


function App() {
  return (
   <div className=' bg-black'>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/addemployee" element={<CreateEmployeePage/>}/>
    </Routes>

   </div>
  )
}

export default App
