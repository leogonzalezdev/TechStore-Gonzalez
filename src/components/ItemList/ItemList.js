import Item from '../Item/Item';
import './ItemList.css';
const ItemList = ({productos}) => {
  return (
  <section className='container'>
    <h3 className='section-title'>Nuestra seleccion para vos</h3>
    <div className='item-list'>
      {
        productos.map( product => <Item key={product.id} {...product}/> )
      }
    </div>
  </section>
  );

}

export default ItemList;