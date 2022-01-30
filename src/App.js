// import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import Test3screen from './pages/Test3';

function App() {
  return (
    <div className="App">
      {/* <Router history={history}>
        <Routes />
      </Router> */}
      <Test3screen />
    </div>
  );
}

export default App;
