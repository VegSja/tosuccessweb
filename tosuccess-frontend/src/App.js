import './style/bootstrap.css';
import './style/custom.css';



//Componentes
import NavBar from './components/navbar';
import Routes from "./Routes";
import UserContext from "./contexts/user"



function App() {
  return (
      <div>
        <Routes />
      </div>
  );
}

export default App;
