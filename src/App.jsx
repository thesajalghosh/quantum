import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio"
import SapBusiness from "./pages/SAPPages/SapBusiness";
import SapConsulting from "./pages/SAPPages/SapConsulting";
import SapSupport from "./pages/SAPPages/SapSupport";
import SapUpgradation from "./pages/SAPPages/SapUpgradation";
import SapBusinessOneCloud from "./pages/SAPPages/SapBusinessOneCloud";
import SapHanaSolution from "./pages/SAPPages/SapHanaSolution";
 // Make sure this file exists

const App = () => {
    return (
        <Router>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/career" element={<Career />} />

                    // All sap routes
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
    );
};

export default App;
