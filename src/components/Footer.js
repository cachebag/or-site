import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} LogiConsult. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

