import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import VendingMachine from "./pages/VendingMachine"
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/machine" element={<VendingMachine/>}/>
        </Routes>
    </>
  )
}

export default App
