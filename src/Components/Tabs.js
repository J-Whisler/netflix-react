import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTablet, faTags } from "@fortawesome/free-solid-svg-icons";

const Tabs = () => {
  return (
    <TabsMain>
      <TabsContainer>
        <div id="tab-1" className="tab-item tab-border">
          <FontAwesomeIcon icon={faTimes} className="fa-3x"></FontAwesomeIcon>
          <p className="hide-sm">Cancel Anytime</p>
        </div>
        <div id="tab-2" className="tab-item">
          <FontAwesomeIcon icon={faTablet} className="fa-3x"></FontAwesomeIcon>
          <p className="hide-sm">watch Anywhere</p>
        </div>
        <div id="tab-3" className="tab-item">
          <FontAwesomeIcon icon={faTags} className="fa-3x"></FontAwesomeIcon>
          <p className="hide-sm">Pick Your Price</p>
        </div>
      </TabsContainer>
    </TabsMain>
  );
};

const TabsMain = styled(motion.div)`
  background: #141414;
  padding-top: 1rem;
  border-bottom: 3px solid #3d3d3d;
`;

const TabsContainer = styled(motion.div)`
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
  > div {
    padding: 1.5rem 0;
    :hover {
      color: #fff;
      cursor: pointer;
    }
  }
  p {
    font-size: 1.2rem;
    padding-top: 0.5rem;
  }
  .tab-border {
    border-bottom: #e50914 4px solid;
  }
`;

export default Tabs;
