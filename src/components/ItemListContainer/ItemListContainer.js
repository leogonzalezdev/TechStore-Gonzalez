import Home from '../Home/Home';
import './ItemListContainer.css';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = ({ greeting }) => {

  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect( () => {

    pedirDatos()
      .then((result) => {
        setProductos(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoading(false)
      })

  });

  return (
    <>
      <Home greeting={greeting}/>
      {
        <div className='item-list-container'>
          { loading ? <Spinner/> : <ItemList productos={productos}/> }
        </div>
      } 

    </>
  );
}

export default ItemListContainer;
