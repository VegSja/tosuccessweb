import './style/bootstrap.css';
import './style/custom.css';



//Componentes
import NavBar from './components/navbar';
import Routes from "./Routes";



function App() {
  return (
    <div>
      <NavBar />
      <div className="page-container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
