import React from 'react';
import './Homepage.css';
import bg from './bg.jpg';
import googleplay from './googleplay.png';
import mockup1 from './mockup1.png';
import subjectsImage from './subjects-image.png'; // Replace with the actual image path

const Homepage = () => {
  return (
    <div className="page-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-container">
        <div className="text-container">
          <h1 className="title">Lakshya</h1>
          <p className="subtitle">
            Every Click Towards Your Achievement...
            <br />
            Nepal's Best App to Prepare for Engineering and Medical Entrance Exams
          </p>
          <button className="see-more-button">See More</button>
          <img
            src={googleplay}
            alt="Google Play Icon"
            className="google-play-icon"
          />
        </div>
        <img
          src={mockup1}
          alt="Mobile App"
          className="mobile-app-image"
        />
      </div>
      
      <div className="subjects-section">
        <h2 className="subjects-title">Subjects</h2>
        <div className="subjects-buttons">
          <button className="subject-button">Botany</button>
          <button className="subject-button">Zoology</button>
          <button className="subject-button">Physics</button>
          <button className="subject-button">Chemistry</button>
          <button className="subject-button">Mathematics</button>
        </div>
        <div className="subjects-content">
          <img src={subjectsImage} alt="Subjects" className="subjects-image" />
          
        </div>
      </div>

      <div className="premium-section">
        <h2 className="premium-title">Premium</h2>
        <div className="premium-options">
          <div className="premium-option">
            <h3>Weekly</h3>
            <p>$25</p>
            <button>Buy Now</button>
          </div>
          <div className="premium-option">
            <h3>Monthly</h3>
            <p>$50</p>
            <button>Buy Now</button>
          </div>
          <div className="premium-option">
            <h3>Annual</h3>
            <p>$175</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-content">
          <div className="faq-item">
            <h3>What is Lakshya?</h3>
            <p>Lakshya is an online learning platform for the students who are preparing for the Engineering, 
              Medical and B.Sc Ag Entrance Examinations. At Lakshya, you can practice thousands of questions online anytime anywhere. The Practice adapts to your progress and gives you the right questions, sets and adaptive tests to practice.</p>
          </div>
          <div className="faq-item">
            <h3>Why should I use Lakshya?</h3>
            <p>It helps you make the most of your limited time. You can learn or practice anytime, anywhere at your own pace; ask questions 24x7 and take tests with thousands of students.</p>
          </div>
          <div className="faq-item">
            <h3>How can I pay for Lakshya?</h3>
            <p>You can pay through eSewa or Khalti to buy Lakshya Packages.</p>
          </div>
        </div>
      </div>

      <div className="contacts-section">
        <h2 className="contacts-title">Contacts</h2>
        <div className="contacts-content">
          <p>Email: <a href="mailto:lakshya@gmail.com">lakshya@gmail.com</a></p>
          <p>Phone: +977 9801456987, +977 9845712563</p>
          <div className="social-icons">
            <a href="#"><img src="path/to/social-icon1.png" alt="Social Icon 1" /></a>
            <a href="#"><img src="path/to/social-icon2.png" alt="Social Icon 2" /></a>
            <a href="#"><img src="path/to/social-icon3.png" alt="Social Icon 3" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
