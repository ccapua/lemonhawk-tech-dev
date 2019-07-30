import React, { useContext } from 'react';

const Header = (props) => {

  return ( 
    <nav>
      <div className="header">
        <div className="logo" onClick={() => props.changePage("landing")}>
          <img alt="lemonhawk" src="https://i.imgur.com/P3e07Yt.png"/>
        </div>
        <div className="web-dev">
          <button onClick={() => props.changePage("web-dev")}>
            Web Development
          </button>
        </div>
        <div className="eBay">
          <button onClick={() => props.changePage("eBay")}>
            eBay
          </button>
        </div>
      </div>
    </nav>
   );
}
 
export default Header;