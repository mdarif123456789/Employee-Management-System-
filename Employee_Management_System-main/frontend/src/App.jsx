
import './App.css'
import {Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import CreateEmployeePage from './pages/CreateEmployeePage'
import EditEmployeePage from './pages/EditEmployeePage'

function App() {
  return (
   <div className=' bg-black'>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {/* <Route Path="/" element={<HomePageDemo/>}/> */}
      <Route path="/addemployee" element={<CreateEmployeePage/>}/>
      {/* <Route path="/edit/:id" element={<EditEmployeePage />} /> */}
      <Route path="/edit/:id" element={<EditEmployeePage />} />
    </Routes>

   </div>
  )
}

export default App
