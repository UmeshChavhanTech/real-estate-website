import React from 'react';
import { Link } from 'react-router-dom';

// SVG Icons for Footer
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EliteEstates</h3>
            <p style={{ color: 'var(--silver)', lineHeight: '1.8' }}>
              Your premier partner in luxury real estate. We redefine premium property experiences with futuristic solutions and unmatched expertise.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="#" className="premium-hover"><FacebookIcon /></a>
              <a href="#" className="premium-hover"><TwitterIcon /></a>
              <a href="#" className="premium-hover"><InstagramIcon /></a>
              <a href="#" className="premium-hover"><LinkedinIcon /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}><Link to="/">Home</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/properties">Properties</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/consultation">Consultation</Link></li>
              <li style={{ marginBottom: '10px' }}><a href="#services">Services</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}><a href="#">Property Sales</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#">Investment Consulting</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#">Property Management</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#">Legal Assistance</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#">Market Analysis</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p style={{ color: 'var(--silver)', marginBottom: '10px' }}>123 Luxury Avenue</p>
            <p style={{ color: 'var(--silver)', marginBottom: '10px' }}>Premium District, CA 90210</p>
            <p style={{ color: 'var(--silver)', marginBottom: '10px' }}>info@eliteestates.com</p>
            <p style={{ color: 'var(--silver)' }}>+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ color: 'var(--silver)' }}>
            &copy; 2024 EliteEstates. All rights reserved. | Designed with Premium Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;