import './Item.css';

const Item = ( { nombre, id, desc, precio, img, stock } ) => {

  return(

    <div className="card">
      <div className="card-img" >
        <img src={img} alt={nombre} />
      </div>
      <div className="card-description">
        <p className='product-name'>{nombre}</p>
        <p className='product-price'>$ { precio } </p> 
        <p>Stock: { stock } </p> 
      </div>
    </div>

  );
}

export default Item;