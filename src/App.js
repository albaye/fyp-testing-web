// import logo from './logo.svg';
import './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/fyp-testing-web'>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
