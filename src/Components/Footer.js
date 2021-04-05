import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <FooterMain>
      <p>Questions? Call 1-800-NETFLIX</p>
      <div className="footer-cols">
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Netflix Originials</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Redeem Gift Cards</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Buy Gift Cards</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
      </div>
    </FooterMain>
  );
};

const FooterMain = styled(motion.div)`
  max-width: 75%;
  margin: 1rem auto;
  overflow: auto;
  color: #999;
  font-size: 0.9rem;
  p {
    margin-bottom: 1.5rem;
  }
  .footer-cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    li {
      line-height: 1.9;
    }
    a {
      color: #999;
      font-size: 0.9rem;
    }
  }
`;

export default Footer;
