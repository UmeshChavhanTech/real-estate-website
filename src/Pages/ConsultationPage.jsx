import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation form submitted:', formData);
    alert('Thank you for your consultation request! We will contact you within 24 hours to confirm your appointment.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      propertyType: '',
      budget: '',
      timeline: '',
      message: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  return (
    <div className="consultation-page">
      <section className="section section-dark">
        <div className="container">
          <div className="consultation-header scroll-reveal">
            <Link to="/" className="btn-back">
              ← Back to Home
            </Link>
            <h1 className="consultation-title">
              <span className="premium-text">Schedule Your</span>{' '}
              <span className="gold-text animate-glow">Premium Consultation</span>
            </h1>
            <p className="consultation-subtitle">
              Begin your luxury real estate journey with a <span className="gold-text">personalized consultation</span>. 
              Our experts will understand your vision and guide you toward your dream property.
            </p>
          </div>

          <div className="consultation-content">
            <div className="consultation-info">
              <div className="info-card premium-card">
                <h3 className="gold-text">Why Choose EliteEstates?</h3>
                <ul className="benefits-list">
                  <li className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <div>
                      <strong>Exclusive Access:</strong> Off-market properties & pre-listings
                    </div>
                  </li>
                  <li className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <div>
                      <strong>Expert Negotiation:</strong> Get the best possible terms
                    </div>
                  </li>
                  <li className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <div>
                      <strong>Market Intelligence:</strong> Data-driven insights
                    </div>
                  </li>
                  <li className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <div>
                      <strong>Premium Network:</strong> Access to top professionals
                    </div>
                  </li>
                  <li className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <div>
                      <strong>Personalized Service:</strong> Dedicated expert guidance
                    </div>
                  </li>
                </ul>
              </div>

              <div className="info-card contact-card">
                <h3 className="gold-text">Contact Information</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <strong>Email:</strong> consultation@eliteestates.com
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">🕒</span>
                    <div>
                      <strong>Business Hours:</strong> Mon-Sun, 9:00 AM - 8:00 PM
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <strong>Address:</strong> 123 Luxury Avenue, Premium District
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="consultation-form-container">
              <form onSubmit={handleSubmit} className="consultation-form">
                <h3 className="form-title gold-text">Schedule Your Consultation</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select 
                    name="propertyType" 
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select Property Type *</option>
                    <option value="luxury-home">Luxury Home</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="villa">Villa</option>
                    <option value="condo">Condominium</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="investment">Investment Property</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <select 
                      name="budget" 
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Budget Range *</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-2m">$1M - $2M</option>
                      <option value="2m-5m">$2M - $5M</option>
                      <option value="5m+">$5M+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select 
                      name="timeline" 
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Timeline *</option>
                      <option value="immediate">Immediate (0-1 month)</option>
                      <option value="short-term">Short Term (1-3 months)</option>
                      <option value="medium-term">Medium Term (3-6 months)</option>
                      <option value="long-term">Long Term (6+ months)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="date"
                      name="preferredDate"
                      placeholder="Preferred Date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <select 
                      name="preferredTime" 
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Preferred Time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements, preferences, and any specific features you're looking for... *"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit premium-hover">
                  Schedule My Premium Consultation
                </button>

                <p className="form-note">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;