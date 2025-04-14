import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { background, quantum2 } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/",
    },
    {
        id: "1",
        title: "Services",
        url: "/services",
    },
    {
        id: "2",
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: "3",
        title: "About us",
        url: "/about-us",
    },
    {
        id: "4",
        title: "Career",
        url: "/career",
    },
    {
        id: "5",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "6",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [hovered, setHovered] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={quantum2} width={190} height={40} alt="OpenAI" />
                </a>

                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                onMouseEnter={() => item.id === "1" && setHovered(true)}
                                onMouseLeave={() => item.id === "1" && setHovered(false)}
                                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname.hash ? "z-2 lg:text-white" : "lg:text-white/50"
                                } lg:leading-5 lg:hover:text-white xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {hovered && (
                        <div
                            className="absolute top-full left-0 w-full bg-white text-black shadow-lg hidden lg:grid grid-cols-5 gap-8 p-8 text-sm"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <div>
                                <h4 className="font-semibold mb-2">SAP services</h4>
                                <ul className="space-y-1">
                                    <li><a href="#">Document update</a></li>
                                    <li><a href="#">Check Aadhaar Update Status</a></li>
                                    <li><a href="#">Update Demographics Data</a></li>
                                    <li><a href="#">Enrolment & Update Forms</a></li>
                                    <li><a href="#">Aadhaar Update History</a></li>
                                    <li><a href="#">Update Aadhaar at Center</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Oracle Services</h4>
                                <ul className="space-y-1">
                                    <li><a href="#">Book an Appointment</a></li>
                                    <li><a href="#">Download Aadhaar</a></li>
                                    <li><a href="#">Order PVC Card</a></li>
                                    <li><a href="#">Check PVC Card Status</a></li>
                                    <li><a href="#">Locate Enrolment Center</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Linux Service</h4>
                                <ul className="space-y-1">
                                    <li><a href="#">Verify Aadhaar Number</a></li>
                                    <li><a href="#">Retrieve Lost UID/EID</a></li>
                                    <li><a href="#">Virtual ID Generator</a></li>
                                    <li><a href="#">Bank Seeding Status</a></li>
                                    <li><a href="#">Check Aadhaar Validity</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">AWS services</h4>
                                <ul className="space-y-1">
                                    <li><a href="#">Features of Aadhaar</a></li>
                                    <li><a href="#">Usage of Aadhaar</a></li>
                                    <li><a href="#">Security in UIDAI</a></li>
                                    <li><a href="#">Aadhaar Myth Busters</a></li>
                                </ul>
                            </div>
                      
                    
                        </div>
                    )}

                    <div className="absolute inset-0 pointer-events-none lg:hidden">
                        <div className="absolute inset-0 opacity-[.03]">
                            <img className="w-full h-full object-cover" src={background} width={688} height={953} alt="" />
                        </div>

                        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
                        <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>

                        <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
                    </div>
                </nav>

                <a href="#signup" className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block">
                    New account
                </a>
                <Button className="hidden lg:flex" href="#login">
                    Sign in
                </Button>

                <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
