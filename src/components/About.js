import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about">
          <div className="about-image"> 
            <img src="/images/Portrait_Placeholder.png" alt="Consultant" />
          </div>
          <div className="about-text">
            <h2>About</h2>
            <p>
              I am a seasoned logistics consultant with over 20 years of experience in the industry. My expertise lies in optimizing supply chain operations, reducing costs, and improving efficiency for businesses of all sizes.
            </p>
            <p>
              I have a proven track record of helping companies streamline their logistics processes and achieve significant cost savings. I am passionate about helping businesses succeed and would love to help you achieve your logistics goals.
            </p>
            <p>
              Contact me today to learn more about how I can help your business succeed.
            </p>
            <a href="#contact" className="about-button">Get in Touch</a>
          </div>
        </div>
      </div>
      <div className="work-experience">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <h3>Logistics Manager at XYZ Corp</h3>
            <p>2010 - 2015</p>
            <p>Managed a team of logistics professionals and oversaw the company's supply chain operations.</p>
          </li>
          <li>
            <h3>Supply Chain Analyst at ABC Inc</h3>
            <p>2005 - 2010</p>
            <p>Analyzed and optimized the company's supply chain processes, resulting in significant cost savings.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;

