import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer className="footer" id="footer">
        &copy; Aman Swarnakar {date}
      </footer>
    </div>
  );
};

export default Footer;
