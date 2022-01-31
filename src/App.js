import './styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={`En TechStore tenemos`}/>
    </>
  );
}

export default App;
