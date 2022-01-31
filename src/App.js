import './styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SingIn from './components/SingIn/SingIn';
import { Boton } from './example/Boton/Boton';
function App() {
  return (
    <>

      <NavBar/>
  
      <ItemListContainer greeting={`En TechStore tenemos`}/>

      {/* <SingIn/> */}
    </>
  );
}

export default App;
