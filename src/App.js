import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { StartupSprintRoutes } from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <StartupSprintRoutes/>

    </BrowserRouter>
  );
}

export default App;
