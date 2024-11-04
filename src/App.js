import './App.css';
import ScrollToTop from './components/common/ScrollToTop';
import AboutUs from './components/home/AboutUs';
import Hero from './components/home/Hero';
import OurRecentWork from './components/home/OurRecentWork';
import WhatWeDo from './components/home/WhatWeDo';

function App() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <OurRecentWork />
      <ScrollToTop />
    </div>
  );
}

export default App;