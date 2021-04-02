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

const TabsMain = styled(motion.div)``;

const TabsContainer = styled(motion.div)``;

export default Tabs;
