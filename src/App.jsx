import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertiesPage from './Pages/PropertiesPage';
import ConsultationPage from './Pages/ConsultationPage';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';

// Home component that includes all sections
function Home() {
  useScrollAnimation();
  
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProperties />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

// Layout component for pages that need header and footer
function PageLayout({ children }) {
  useScrollAnimation();
  
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="loading-bar" id="loadingBar"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/properties" 
            element={
              <PageLayout>
                <PropertiesPage />
              </PageLayout>
            } 
          />
          <Route 
            path="/consultation" 
            element={
              <PageLayout>
                <ConsultationPage />
              </PageLayout>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;