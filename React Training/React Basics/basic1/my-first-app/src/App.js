// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main-content">
          <Sidebar/>
          <div className="main-cont">
            <div className="cont"></div>
            
          </div>
        </div>
    </div>
    

  );
}

export default App;
