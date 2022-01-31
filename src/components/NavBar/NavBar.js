import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import avatar from '../../img/avatar.jpg';
import logo from '../../img/TechStore_logo.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchInput from '../SearchInput/SearchInput';

const NavBar = () => {
  return (
    <>
      <header className='header'>

        <div className='left'>
          <BurgerMenu/>
          <img src={logo} width='100px' />
        </div>

        <div className='right'>
          <div className='user'>
            <img className='user-avatar' src={avatar}/>
          </div>
          <SearchInput/>
          <CartWidget/>
         </div>

      </header>

      <nav className="navbar">
        <p className="nav-link">Accesorios</p>
        <p className="nav-link">Auriculares</p>
        <p className="nav-link">Tablet</p>
        <p className="nav-link">Notebook</p>
        <p className="nav-link">Celulares</p>
        <p className="nav-link">Cargadores</p>
      </nav>
    </>
  );
}

export default NavBar;