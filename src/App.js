import logo from './logo.svg';
import './App.css';

function Header(prop) {
  return(
    <h1>{prop.name}'s Kitchen</h1>
  );
}

function Main(prop){
  return(
    <section>
      <p>{prop.adjective} Hotel around Town</p>
    </section>
  );
}

function Footer(prop){
  return(
    <p>Copyright &copy; {prop.year}</p>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Derrick"/>
      <Main adjective="Amazing"/>
      <Footer year= {new Date().getFullYear()} />
    </div>
  );
}

export default App;
