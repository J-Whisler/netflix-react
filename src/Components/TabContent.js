import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Tab1Content from "../img/tab-content-1.png";

const TabContent = () => {
  return (
    <TabContentMain>
      <TabContentContainer>
        {/* Tab 1 Content */}
        <div id="tab-1-content" className="tab-content-item show">
          <div className="tab-1-content-inner">
            <div>
              <p className="text-lg">
                If you decide Netflix isn't for you - no problem. No commitment.
                Cancel online anytime.
              </p>
              <a href="#" className="btn btn-lg">
                Watch Free for 30 Days
              </a>
            </div>
            <img src={Tab1Content} alt="" />
          </div>
        </div>
      </TabContentContainer>
    </TabContentMain>
  );
};

const TabContentMain = styled(motion.div)`
  padding: 3rem 0;
  background: #000;
  color: #fff;
`;

const TabContentContainer = styled(motion.div)`
  width: 69%;
  margin: auto;
  #tab-1-content {
    /* display: none; */
    .tab-1-content-inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
      justify-content: center;
      align-items: center;
      .text-lg {
        font-size: 2rem;
        margin-bottom: 1rem;
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
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        border-radius: 0.1rem;

        &:hover {
          opacity: 0.85;
        }
      }
      .btn-lg {
        font-size: 1rem;
        padding: 0.8rem 1.3rem;
        text-transform: uppercase;
      }
    }
  }
`;

export default TabContent;
