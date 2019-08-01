import React, { } from 'react';

const LandingPage = () => {
  return ( 
    <div>
      <section className="landing-page">
        <h1>Welcome!</h1>
        <h2>This is the homepage of Lemonhawk Technologies, LLC</h2>
        <h3>What does Lemonhawk Tech offer?</h3>
        <ul>
          <li><div className="landing-boxes"><span>Webpage construction and updating</span></div></li>
          <li><div className="landing-explanation"><span></span></div></li>
          
          <li><div className="landing-explanation"><span></span></div></li>
          <li><div className="landing-boxes"><span>Single Page Web Application (SPA) construction and updating</span></div></li>

          <li><div className="landing-boxes"><span>Buying and selling electronics</span></div></li>
          <li><div className="landing-explanation"><span></span></div></li>
          
          <li><div className="landing-explanation"><span></span></div></li>
          <li><div className="landing-boxes"><span>eBay search, list, and analytics app</span></div></li>
        </ul>
      </section>
    </div>
   );
}
 
export default LandingPage;