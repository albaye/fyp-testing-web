// import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
