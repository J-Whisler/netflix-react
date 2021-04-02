import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Tab1Content from "../img/tab-content-1.png";
import TabContent21 from "../img/tab-content-2-1.png";
import TabContent22 from "../img/tab-content-2-2.png";
import TabContent23 from "../img/tab-content-2-3.png";

const TabContent = () => {
  return (
    <TabContentMain>
      <TabContentContainer>
        {/* Tab 1 Content */}
        {/* <div id="tab-1-content" className="tab-content-item show">
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
        </div> */}
        {/* Tab Content 2 */}
        <div id="tab-2-content" className="tab-content-item">
          <div className="tab-2-content-top">
            <p className="text-lg">
              Watch TV shows and movies anytime, anywhere &nbsp;&nbsp; -
              personalized for you.
            </p>
            <a href="#" className="btn btn-lg">
              Watch Free for 30 Days
            </a>
          </div>
          <div className="tab-2-content-bottom">
            <div>
              <img src={TabContent21} alt="" />
              <p className="text-md">Watch on your TV</p>
              <div className="text-dark">
                Smart TVs, Playstation, Xbox, Chromecast, Apple TV. Blue-ray
                players and more.
              </div>
            </div>
            <div>
              <img src={TabContent22} alt="" />
              <p className="text-md">Watch instantly or download for later</p>
              <p className="text-dark">
                Available on phone and tablet, wherever you go.
              </p>
            </div>
            <div>
              <img src={TabContent23} alt="" />
              <p className="text-md">Use any computer</p>
              <p className="text-dark">Watch right now on Netflix.com</p>
            </div>
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
    }
  }
  #tab-2-content {
    /* display:none; */
    .tab-2-content-top {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 1rem;
      justify-content: center;
      align-items: center;
      .btn {
        transform: translateY(-0.7rem);
      }
    }
    .tab-2-content-bottom {
      display: grid;
      margin-top: 2rem;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      text-align: center;
    }
  }
`;

export default TabContent;
