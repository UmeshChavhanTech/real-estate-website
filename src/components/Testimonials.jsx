import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "EliteEstates transformed our property search into an extraordinary journey. Their attention to detail and market expertise helped us secure our dream penthouse with incredible terms. Truly premium service!",
      author: "Sarah Johnson",
      role: "Luxury Property Investor"
    },
    {
      id: 2,
      text: "The team's innovative approach and deep understanding of luxury real estate is unmatched. They navigated complex negotiations with finesse and delivered results beyond our expectations. Exceptional!",
      author: "Michael Chen",
      role: "Tech Executive & Collector"
    },
    {
      id: 3,
      text: "Working with EliteEstates was a revelation. Their futuristic marketing strategies and premium network access presented opportunities we never knew existed. A truly world-class experience from start to finish.",
      author: "Emily Rodriguez",
      role: "International Business Owner"
    }
  ];

  return (
    <section id="testimonials" className="section section-dark">
      <div className="container">
        <div className="scroll-reveal">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="premium-text">Client</span>{' '}
            <span className="gold-text animate-glow">Success Stories</span>
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            maxWidth: '700px', 
            margin: '0 auto 50px',
            color: 'var(--light-silver)'
          }}>
            Discover why <span className="gold-text">discerning clients worldwide</span> trust us with their most significant real estate investments and lifestyle transformations
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="testimonial-card premium-hover">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author animate-glow">{testimonial.author}</p>
                <p style={{ color: 'var(--silver)', fontSize: '1rem' }}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;