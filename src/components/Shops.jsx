import React from 'react';
import PropTypes from 'prop-types';




const Shops = ({ activeItem, items, onClickShop }) => {
    
    
  return (
    <div className="shops">
    <ul>
            
            {
                items.map((name, index) => (
                <li className={activeItem === index ? "active" : ''}
                
                 onClick= {() => onClickShop(index)} key={name}>{name}</li>)
                )
            }
      
              </ul>
    </div>
  );
};



export default Shops;