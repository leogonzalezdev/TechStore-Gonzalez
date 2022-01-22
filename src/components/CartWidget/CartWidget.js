import icon from '../../img/cart-icon.svg'
import './CartWidget.css';

const CartWidget = () => {
  return(
    <img className='cart-icon' src={icon}/>
  );
}

export default CartWidget;