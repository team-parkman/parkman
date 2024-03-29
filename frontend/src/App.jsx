import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import ScrollToTop from "./ScrolToTop";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import FindLot from "./pages/FindLot";
import FindCarWash from "./pages/FindCarWash";
import Contact from "./pages/Contact";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { BusinessCarwash, BusinessHistory, BusinessHome, BusinessUsers, CarLot } from "./pages/Dashboard/BusinessDashboard/pages";
import { BusinessRoot } from "./pages/Dashboard/BusinessDashboard/BusinessRoot";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className="overflow-x-hidden h-full bg-background">
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/car_park" element={<FindLot />} />
        <Route path="/car_wash" element={<FindCarWash />} />

        <Route element={<BusinessRoot/>}>
          <Route path="/business-dashboard" element={<BusinessHome />} />
          <Route path="/business-carlot" element={<CarLot/>}/>
          <Route path="/business-carwash" element={<BusinessCarwash/>}/>
          <Route path="/business-users" element={<BusinessUsers/>}/>
          <Route path="/business-history" element={<BusinessHistory/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
