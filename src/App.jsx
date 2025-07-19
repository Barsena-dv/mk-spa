import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';

export default function App() {
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");

        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="loader-container d-flex justify-content-center align-items-center bg-black text-white">
                <div className="loader-text text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK7fP1NhKN51XRD-mfVRvZOacS7cz7VgXrA&s" alt="MK Loading" className="mb-4 pulse" style={{ width: '100px' }} />
                    <h2 className="fw-bold">Loading Kombat Arena...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-vh-100 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            <Router>
                <header className="position-relative bg-dark text-center text-white animated-header" style={{ height: "60vh", backgroundImage: "url('https://media.eventhubs.com/images/2024/11/20_film.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK7fP1NhKN51XRD-mfVRvZOacS7cz7VgXrA&s" alt="MK Logo" style={{ width: "100px" }} className="mb-3 pulse" />
                        <h1 className="display-4 fw-bold neon-text">MORTAL KOMBAT</h1>
                        <p className="mt-2">by Dhruv Barsena</p>
                    </div>
                </header>

                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                    <div className="container justify-content-center gap-3">
                        {["Home", "Characters", "Gallery", "About", "Contact"].map((label) => (
                            <NavLink
                                key={label.toLowerCase()}
                                to={`/${label === "Home" ? "" : label.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `nav-link text-uppercase hover-glow ${isActive ? "text-danger" : "text-light"}`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </nav>

                <motion.main
                    className="container my-5 fade-in"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </motion.main>

                <footer className="bg-black text-center py-4 text-secondary">
                    <p>Designed by Mortal Kombat Pvt. Ltd. | © 2025</p>
                    <a
                        href="https://mortalkombat.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light text-decoration-underline"
                    >
                        mortalkombat.com
                    </a>
                </footer>
            </Router>
        </div>
    );
}
