import React from 'react';

// SVG Icons
const BedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.81-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"/>
  </svg>
);

const BathIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 10H7V7a2 2 0 0 1 2-2 2 2 0 0 1 2 2h2a4 4 0 0 0-4-4 4 4 0 0 0-4 4v3H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-3 9H6v-5h12v5z"/>
  </svg>
);

const SquareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
  </svg>
);

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card premium-hover">
      <img 
        src={property.image} 
        alt={property.title}
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover'
        }}
      />
      <div style={{ padding: '25px' }}>
        <h3 style={{ color: 'var(--light-silver)', marginBottom: '10px' }}>{property.title}</h3>
        <p style={{ color: 'var(--gold)', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
          ${property.price.toLocaleString()}
        </p>
        <p style={{ color: 'var(--silver)', marginBottom: '20px' }}>{property.description}</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--silver)' }}>
            <BedIcon />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--silver)' }}>
            <BathIcon />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--silver)' }}>
            <SquareIcon />
            <span>{property.area} sqft</span>
          </div>
        </div>
        
        <button className="btn-primary premium-hover" style={{ width: '100%' }}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;