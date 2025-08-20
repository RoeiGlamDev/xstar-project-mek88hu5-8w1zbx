import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: 'Sophia L.',
    feedback: 'GlamCS transformed my beauty routine! The products are luxurious and effective.',
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'Isabella M.',
    feedback: 'I love the elegant packaging and the quality of the cosmetics!',
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Olivia R.',
    feedback: 'The 3D designs are stunning! GlamCS is my go-to for all things beauty.',
    image: '/images/testimonial3.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;