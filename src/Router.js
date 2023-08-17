import { BrowserRouter,Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Contactpage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";

const Router =()=>{
return(
    <BrowserRouter>
        <NavBar />
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
    </Routes>
    </BrowserRouter>
)
}
export default Router;