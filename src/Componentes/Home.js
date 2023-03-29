import logo from './logo.svg';
import './Home.css';

export function Home(){

    return (
        <div className="Home">
        <header className="App-Home">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1>App React</h1>
          <p>
            Proyecto de React
            para el Curso de React Basico
            Imparitdo por el 
            Centro de Formacion Avanzado para Profecionales

          </p>
          <h3>Realizado por:</h3>
          <h4>Walter Elias Duran Rosales</h4>
          
        </header>
      </div>
        
    )
}