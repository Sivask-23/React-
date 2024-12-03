
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
          <Routes>  
          <Route path='/' element={<MainContent />} />
          <Route path='/user/:id' element={<UserDetails />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
