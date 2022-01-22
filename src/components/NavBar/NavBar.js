import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import avatar from '../../img/avatar.jpg';
import logo from '../../img/TechStore_logo.png';

const NavBar = () => {

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src={logo} width='150px' />
        </div>
        <div className='session-container'>
          <CartWidget/>
          <div className='user'>
            <img className='user-avatar' src={avatar}/>
            <p className='user-name'>John Doe</p>
          </div>
         </div>
      </header>
      <nav className="navbar">
        <p className="nav-link">Auriculares</p>
        <p className="nav-link">Celulares</p>
        <p className="nav-link">Tablet</p>
        <p className="nav-link">Notebook</p>
        <p className="nav-link">Accesorios</p>
      </nav>
    </>
  );
}

export default NavBar;