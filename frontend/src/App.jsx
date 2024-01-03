import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import ScrollToTop from "./ScrolToTop";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="overflow-x-hidden h-full bg-background">
      <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
