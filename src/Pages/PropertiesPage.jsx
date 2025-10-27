import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card premium-hover">
      <img
        src={property.image}
        alt={property.title}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <div style={{ padding: "25px" }}>
        <h3 style={{ color: "var(--light-silver)", marginBottom: "10px" }}>
          {property.title}
        </h3>
        <p
          style={{
            color: "var(--gold)",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          ${property.price.toLocaleString()}
        </p>
        <p style={{ color: "var(--silver)", marginBottom: "20px" }}>
          {property.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ color: "var(--silver)" }}>
            🛏️ {property.bedrooms} Beds
          </div>
          <div style={{ color: "var(--silver)" }}>
            🚿 {property.bathrooms} Baths
          </div>
          <div style={{ color: "var(--silver)" }}>
            📐 {property.area} sqft
          </div>
        </div>

        <button className="btn-primary premium-hover" style={{ width: "100%" }}>
          View Details
        </button>
      </div>
    </div>
  );
};

const PropertiesPage = () => {
  const allProperties = [
    {
      id: 1,
      title: "Luxury Penthouse Downtown",
      price: 2500000,
      description:
        "Stunning penthouse with panoramic city views, smart home automation, and premium amenities including private pool and spa",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Modern Villa with Infinity Pool",
      price: 1800000,
      description:
        "Contemporary villa featuring infinity pool, smart home technology, and eco-friendly design with solar panels",
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Waterfront Luxury Condo",
      price: 1200000,
      description:
        "Elegant waterfront condominium with private marina access, floor-to-ceiling windows, and premium finishes",
      bedrooms: 3,
      bathrooms: 2,
      area: 2200,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      <section className="section section-dark">
        <div className="container">
          <Link
            to="/"
            className="btn-secondary"
            style={{
              marginBottom: "30px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </Link>

          <h1 style={{ marginBottom: "20px" }}>
            <span className="premium-text">Premium</span>{" "}
            <span className="gold-text animate-glow">
              Properties Collection
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              marginBottom: "50px",
              color: "var(--light-silver)",
            }}
          >
            Discover our exclusive portfolio of luxury properties curated for
            the most discerning buyers.
          </p>

          <div className="properties-grid">
            {allProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div
            style={{ textAlign: "center", marginTop: "50px" }}
            className="scroll-reveal"
          >
            <div
              style={{
                background: "var(--black)",
                padding: "40px",
                borderRadius: "15px",
                border: "1px solid var(--gold)",
              }}
            >
              <h3 className="gold-text" style={{ marginBottom: "20px" }}>
                Can't Find Your Dream Property?
              </h3>
              <p style={{ marginBottom: "25px", color: "var(--silver)" }}>
                Our exclusive network has access to off-market properties and
                upcoming listings. Let us help you find the perfect match.
              </p>
              <Link
                to="/consultation"
                className="btn-primary premium-hover"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Get Personalized Assistance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
