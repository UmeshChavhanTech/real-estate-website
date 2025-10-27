import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle navigation for anchor sections
  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      // If already on home page, smooth scroll directly
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first, then scroll after small delay
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo premium-hover">
            EliteEstates
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li>
              <Link to="/" className="premium-hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="premium-hover">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/consultation" className="premium-hover">
                Consultation
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="premium-hover"
                onClick={(e) => handleAnchorClick(e, "#services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="premium-hover"
                onClick={(e) => handleAnchorClick(e, "#testimonials")}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="premium-hover"
                onClick={(e) => handleAnchorClick(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-content">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/properties" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Properties
              </Link>
              <Link to="/consultation" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Consultation
              </Link>
              <a
                href="#services"
                className="mobile-nav-link"
                onClick={(e) => handleAnchorClick(e, "#services")}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="mobile-nav-link"
                onClick={(e) => handleAnchorClick(e, "#testimonials")}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={(e) => handleAnchorClick(e, "#contact")}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="mobile-menu-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;