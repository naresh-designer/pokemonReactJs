import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Detail from "./Components/Detail"
import Home from "./Components/Home"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/Detail/:id" element={<Detail/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App