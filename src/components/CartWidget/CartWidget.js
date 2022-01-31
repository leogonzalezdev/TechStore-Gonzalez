import icon from '../../img/cart-icon.svg';
import './CartWidget.css';

const CartWidget = () => {
  return(
    <div className='cart-container'>
      <img className='cart-icon' src={icon}/>
      <p>Cart<span></span></p>
    </div>
  );
}

export default CartWidget;