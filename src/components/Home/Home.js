import './Home.css';

const Home = ({greeting}) => {

  return(
    <div className="container-img">
      <h1 className="welcome-title">{greeting} <br/>los mejores descuentos para vos.</h1>
      <p className="welcome-info">Hasta un 50% off en accesorios tecnologicos.</p>
    </div>
  );

}

export default Home;