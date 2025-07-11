import './App.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Login from "./pages/Login/Login";
import Mapa from "./pages/Mapa/Mapa";
import SideMenu from './components/Menu/SideMenu';

function App() {
    return (
        <PrimeReactProvider>
          <Mapa/>
          <SideMenu/>
            <Login />
        </PrimeReactProvider>

  );
}

export default App;
