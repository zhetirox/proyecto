import './App.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Login from "./pages/Login/Login";

function App() {
    return (
        <PrimeReactProvider>
            <Login />
        </PrimeReactProvider>

  );
}

export default App;
