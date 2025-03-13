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
              24+ years of experience in the Automotive Industry as a Logistics Manager. Extensive experience working with international suppliers. $20M+ of managed inventory. Successfully launched 20+ projects for different OEMs as a tier 1/2 supplier. SAP Super user on modules MM, SD, PP, WM. Certified internal auditor ISO TS16949/ISO 14000. 
            <p>
             Looking to secure a challenging logistics or supply chain management position with a dynamic and exciting organization where my business knowledge, experience and skills will contribute towards the growth and success of the organization.              </p>
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

