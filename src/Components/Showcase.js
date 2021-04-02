import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../img/logo.png";
import Background from "../img/background.jpg";

const Showcase = () => {
  return (
    <ShowcaseMain>
      <ShowcaseTop>
        <img src={Logo} alt="netflix" />
        <a href="#" className="btn btn-rounded">
          Sign In
        </a>
      </ShowcaseTop>
    </ShowcaseMain>
  );
};

const ShowcaseMain = styled(motion.div)`
  width: 100%;
  height: 93vh;
  position: relative;
  background: url(${Background}) no-repeat center center/cover;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 120px 100px 250px #000 inset, -120px -100px 250px #000 inset;
  }
`;
const ShowcaseTop = styled(motion.div)`
  position: relative;
  height: 5.6rem;
  z-index: 2;
  img {
    width: 10.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  a {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }

  .btn {
    display: inline-block;
    background: #e50914;
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    outline: none;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .btn:hover {
    opacity: 0.85;
  }

  .btn-rounded {
    border-radius: 0.3rem;
  }
`;

export default Showcase;
