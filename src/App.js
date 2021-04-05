import React from 'react'
import GlobalStyle from './Components/GlobalStyle';
import Showcase from './Components/Showcase'
import Tabs from './Components/Tabs';
// import TabContent from './Components/TabContent';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
     <Showcase />
     <Tabs />
     {/* <TabContent /> */}
     <Footer />
    </div>
  );
}

export default App;
