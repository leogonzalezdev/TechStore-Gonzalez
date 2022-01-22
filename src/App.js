import './styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenido! Aún estoy en desarrollo.'/>
    </>
  );
}

export default App;
