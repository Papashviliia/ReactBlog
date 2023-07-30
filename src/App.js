import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import DefaultPage from "./pages/DefaultPage"

function App() {
  return(
        <BrowserRouter>
        
        <Navbar />

        <Routes>

            
            <Route path="/" element={<DefaultPage />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>

        </Routes>
        
        <Footer />

        </BrowserRouter>);
}

export default App
