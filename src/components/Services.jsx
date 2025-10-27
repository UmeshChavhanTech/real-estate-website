import React from 'react';

// SVG Icons
const HomeIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const Services = () => {
  const services = [
    {
      icon: <HomeIcon />,
      title: "Premium Property Sales",
      description: "Comprehensive luxury property transactions with personalized service and exclusive market access for discerning clients"
    },
    {
      icon: <TrendingUpIcon />,
      title: "Investment Consulting",
      description: "Strategic real estate investment guidance with market analysis, portfolio optimization, and high-yield opportunity identification"
    },
    {
      icon: <UsersIcon />,
      title: "Elite Property Management",
      description: "Complete luxury property management solutions including maintenance, tenant relations, and value enhancement services"
    },
    {
      icon: <ShieldIcon />,
      title: "Legal Excellence",
      description: "Premium legal support and transaction management ensuring seamless, secure, and compliant property dealings"
    }
  ];

  return (
    <section id="services" className="section section-black">
      <div className="container">
        <div className="scroll-reveal">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="premium-text">Elite</span>{' '}
            <span className="gold-text animate-glow">Services</span>
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            maxWidth: '700px', 
            margin: '0 auto 50px',
            color: 'var(--light-silver)'
          }}>
            Experience <span className="gold-text">unparalleled real estate services</span> designed for discerning clients who expect nothing but excellence and innovation
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-card premium-hover">
                <div className="animate-float">
                  {service.icon}
                </div>
                <h3 style={{ marginBottom: '20px', color: 'var(--light-silver)' }} className="gold-text">
                  {service.title}
                </h3>
                <p style={{ color: 'var(--silver)', lineHeight: '1.8' }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;