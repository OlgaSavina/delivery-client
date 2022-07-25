
import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Header() {
const {totalPrice,totalCount} = useSelector(({cart})=>({
  totalPrice: cart.totalPrice,
  totalCount: cart.totalCount,
}));

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
        </Link>
        <div className="header__cart">
          <Link to='/cart'>
          <Button className="button--cart">
          
            <h3>Shopping cart  </h3>

            
          <span>{totalPrice}</span>
            <div className="button__delimiter"></div>
            <span>{totalCount}</span>
          </Button>
          </Link>
         
           
        
        </div>
      </div>
    </div>
  );

}
 export default Header;