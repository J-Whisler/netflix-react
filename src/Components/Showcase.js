import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Logo from "../img/logo.png";

const Showcase = () => {
  return (
    <ShowcaseMain>
      <ShowcaseTop>
        <img src={Logo} alt="netflix" />
      </ShowcaseTop>
    </ShowcaseMain>
  );
};

const ShowcaseMain = styled(motion.div)``;
const ShowcaseTop = styled(motion.div)``;

export default Showcase;
