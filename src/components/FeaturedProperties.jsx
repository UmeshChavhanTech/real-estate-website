import React from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
  const properties = [
  {
    id: 1,
    title: "Modern City Villa",
    price: 1800000,
    description: "Beautiful modern villa located in the heart of the city, offering open living spaces, terrace garden, and elegant interiors.",
    bedrooms: 4,
    bathrooms: 3,
    area: 3100,
    image: "https://images.unsplash.com/photo-1691425700585-c108acad6467?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    featured: true
  },
  {
    id: 2,
    title: "Urban Family Home",
    price: 950000,
    description: "A contemporary family home with spacious rooms, a minimalist kitchen, and a cozy backyard for evening relaxation.",
    bedrooms: 3,
    bathrooms: 2,
    area: 2400,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Elegant Suburban Residence",
    price: 1250000,
    description: "An elegant suburban property featuring a modern architectural design, natural lighting, and a landscaped front yard.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80",
    featured: true
  }
];


  return (
    <section id="properties" className="section section-dark">
      <div className="container">
        <div className="scroll-reveal">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="premium-text">Featured</span>{' '}
            <span className="gold-text animate-glow">Properties</span>
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto 50px',
              color: 'var(--light-silver)',
            }}
          >
            Explore our <span className="gold-text">handpicked selection</span> of
            modern properties offering comfort, convenience, and premium
            amenities — ideal for contemporary living.
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

        <div
          style={{ textAlign: 'center', marginTop: '50px' }}
          className="scroll-reveal"
        >
          <button className="btn-secondary premium-hover">
            View All Listings →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
