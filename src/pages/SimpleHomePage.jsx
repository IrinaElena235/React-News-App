import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./SimpleHomePage.css";

function SimpleHomePage() {
    const [isGlowing, setIsGlowing] = useState(false);

    const handleMouseEnter = () => {
      setIsGlowing(true);
    };
  
    const handleMouseLeave = () => {
      setIsGlowing(false);
    };
    const scrollToSection = () => {
        const section = document.getElementById('travelSection');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <body className="bodyStyle">
    <div className="containerStyle">
    <Container>
    <div>
    <h1 className={`heading ${isGlowing ? "glow" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
        Culture Hub News
    </h1>
    <p class="paragraphStyle">
    Welcome to our vibrant news website, your go-to destination for the latest updates across a diverse spectrum of topics. <p>From thrilling travel adventures to tantalizing culinary explorations, from the latest fashion trends to groundbreaking scientific discoveries, and from melodic music insights to captivating film reviews, we've got you covered.</p>
    </p>
    <button className="scroll-button" onClick={scrollToSection}>
  <img src="/../../arrow-down.png"/>
        </button>
    </div>
  </Container>
  </div>
  </body>
  );
}

export default SimpleHomePage;