import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../img/logo.png";
import Background from "../img/background.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Showcase = () => {
  return (
    <ShowcaseMain>
      <ShowcaseTop>
        <img src={Logo} alt="netflix" />
        <a href="#" className="btn btn-rounded">
          Sign In
        </a>
      </ShowcaseTop>
      <ShowcaseContent>
        <h1>See what's next</h1>
        <p>Watch anywhere. Cancel anytime</p>
        <a href="" className="btn btn-xl">
          Watch Free for 30 Days
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon"
          ></FontAwesomeIcon>
        </a>
      </ShowcaseContent>
    </ShowcaseMain>
  );
};

const ShowcaseMain = styled(motion.div)`
  width: 100%;
  height: 94vh;
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
`;

const ShowcaseContent = styled(motion.div)`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 9rem;
  z-index: 2;
  h1 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: 0.2rem;
  }
  p {
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 1.25;
    margin-bottom: 3rem;
    letter-spacing: 0.1rem;
  }
`;

export default Showcase;
