import React from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse Downtown",
      price: 2500000,
      description: "Stunning penthouse with panoramic city views, smart home automation, and premium amenities including private pool and spa",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Modern Villa with Infinity Pool",
      price: 1800000,
      description: "Contemporary villa featuring infinity pool, smart home technology, and eco-friendly design with solar panels",
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Waterfront Luxury Condo",
      price: 1200000,
      description: "Elegant waterfront condominium with private marina access, floor-to-ceiling windows, and premium finishes",
      bedrooms: 3,
      bathrooms: 2,
      area: 2200,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    }
  ];

  return (
    <section id="properties" className="section section-dark">
      <div className="container">
        <div className="scroll-reveal">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="premium-text">Featured</span>{' '}
            <span className="gold-text animate-glow">Premium Properties</span>
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            maxWidth: '700px', 
            margin: '0 auto 50px',
            color: 'var(--light-silver)'
          }}>
            Discover our <span className="gold-text">exclusive collection</span> of handpicked luxury properties that redefine modern living with innovative design and premium amenities
          </p>
        </div>
        
        <div className="properties-grid">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '50px' }} className="scroll-reveal">
          <button className="btn-secondary premium-hover">
            View All Premium Listings →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;