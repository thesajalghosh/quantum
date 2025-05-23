import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import SapBusiness from "./pages/SAPPages/SapBusiness";
import SapConsulting from "./pages/SAPPages/SapConsulting";
import SapSupport from "./pages/SAPPages/SapSupport";
import SapUpgradation from "./pages/SAPPages/SapUpgradation";
import SapBusinessOneCloud from "./pages/SAPPages/SapBusinessOneCloud";
import SapHanaSolution from "./pages/SAPPages/SapHanaSolution";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Router>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/career" element={<Career />} />

                  
                    <Route path="/services/sap-business" element={<SapBusiness />} />
                    <Route path="/services/sap-consulting" element={<SapConsulting />} />
                    <Route path="/services/sap-support" element={<SapSupport />} />
                    <Route path="/services/sap-upgradation" element={<SapUpgradation />} />
                    <Route path="/services/sap-business-one-cloud" element={<SapBusinessOneCloud />} />
                    <Route path="/services/sap-hana-solution" element={<SapHanaSolution />} />
                </Routes>
                <Footer />
            </div>
        </Router>
     
    </React.StrictMode>
);
