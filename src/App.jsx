import { useState,useEffect } from "react";
import logo from "./assets/client_logo.jpg"; // apna logo daal de
import heroImg1 from "./assets/image1.png";
import heroImg2 from "./assets/image.png";

import video1 from './assets/video1.mp4'
import video2 from './assets/video2.mp4'
function App() {
  const [open, setOpen] = useState(false);

useEffect(() => {
  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const changeSlide = () => {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    index = (index + 1) % slides.length;
  };
  const interval = setInterval(changeSlide, 2000);
  return () => clearInterval(interval);
}, []);

  return (
    <>
      {/* Navbar */}
      <header className="navwrap">
        <nav className="navbar container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Links */}
          <div className={`navlinks ${open ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
{/* Hero Section with Slider */}
{/* Hero Section with Slider */}
<section id="home" className="hero">
  <div className="slider">
    {/* Slide 1 - Video */}
    <div className="slide active">
      <video autoPlay muted loop playsInline>
        <source src={video1} type="video/mp4" />
      </video>
    </div>

    {/* Slide 2 - Image */}
    <div className="slide">
      <img src={heroImg1} alt="Slide 2" />
    </div>

    {/* Slide 3 - Video */}
    <div className="slide">
      <video autoPlay muted loop playsInline>
        <source src={video2} type="video/mp4" />
      </video>
    </div>

    {/* Slide 4 - Image */}
    <div className="slide">
      <img src={heroImg2} alt="Slide 4" />
    </div>
  </div>

  <div className="hero-overlay">
    <h1>Empowering Lives Through Welfare Awareness</h1>
    <p>
      Get reliable information about government schemes, scholarships,
      and social welfare initiatives – all in one place.
      Stay informed, stay empowered.
    </p>
    
  </div>
</section>




    </>
  );
}

export default App;
