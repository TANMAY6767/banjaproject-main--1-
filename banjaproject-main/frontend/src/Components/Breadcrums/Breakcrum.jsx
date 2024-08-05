// import React from 'react'
// import './Breakcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'
// import data_product from '../Assets/data'
// import new_collections from '../Assets/new_collections'
// import Item from '../Item/Item'
// import p1_img from '../Assets/product_1.png'
// const Breakcrum = (props) => {
//     const {product}=props;
//   return (
//     <div className='breakcrum'>
//          <div className="hero-left">
//         <h2>MADE IN INDIA</h2>
//         <div>
//           <div className="hero-hand-icon">
//             <ul>
//               <li>TOYOTA CAMRY 2.5 HYBRID</li>
//               <li>price:26.6L</li>
//             </ul>
//           </div>
//           <p></p>
//         </div>
//         <div className="hero-latest-btn">
//         <div><button>BUY</button></div>
//         {/* <img src={arrow_icon} alt=""/> */}
//         </div>
//       </div>
//       <div className="hero-right">
//       <img src={p1_img} alt=""/>
//       </div>
//     </div>
//   )
// }

// export default Breakcrum


// Breakcrum.jsx
import React, { useState } from 'react';
import './Breakcrum.css';

import arrow_icon from '../Assets/breadcrum_arrow.png';
import data_product from '../Assets/data';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';
import p1_img from '../Assets/product_1.png';
import BuyForm from '../BuyForm/BuyForm';
const Breakcrum = (props) => {
  const { product } = props;
  const [showBuyForm, setShowBuyForm] = useState(false);

  // Function to toggle showing the Buy Form
  const toggleBuyForm = () => {
    setShowBuyForm(!showBuyForm);
  };

  return (
    <div className='breakcrum'>
      <div className="hero-left">
        <h2>MADE IN INDIA</h2>
        <div>
          <div className="hero-hand-icon">
            <ul>
              <li>TOYOTA CAMRY 2.5 HYBRID</li>
              <li>price:26.6L</li>
            </ul>
          </div>
          <p></p>
        </div>
        <div className="hero-latest-btn">
          {showBuyForm ? (
            <BuyForm /> // Render BuyForm if showBuyForm is true
          ) : (
            <button onClick={toggleBuyForm}>BUY</button>
          )}
          {/* <img src={arrow_icon} alt=""/> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={p1_img} alt=""/>
      </div>
    </div>
  );
};

export default Breakcrum;
