import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./compenents/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Footer from "./compenents/Footer";
import Gallery from "./pages/Gallery";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
