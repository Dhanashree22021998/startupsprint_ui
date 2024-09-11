import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { StartupSprintRoutes } from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
        <StartupSprintRoutes/>

    </BrowserRouter>
  );
}

export default App;
