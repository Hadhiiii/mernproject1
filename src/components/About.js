import React from 'react';
import './About.css'; // Import a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to our application! We are dedicated to providing the best experience for our users.
          Our team consists of passionate developers and designers who strive to create innovative solutions.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize the way people interact with technology, making their lives easier and more enjoyable.
        </p>
        <h2>Our Team</h2>
        <ul>
          <li><strong>Jane Doe:</strong> Lead Developer</li>
          <li><strong>John Smith:</strong> UX/UI Designer</li>
          <li><strong>Emily Johnson:</strong> Product Manager</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
