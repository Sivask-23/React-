
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContents from './components/MainContents';
import PostDetails from './components/PostDetails';
import PostData from './components/PostData';
import NotFound from './components/NotFound';
import { useState } from 'react';

function App() {


  const [postD,setPostData]=useState({});

  const takePostData=(data)=>{
    setPostData(data)
  }
  return (
    <Router>
        <div className="App">
        
          <Routes>

            <Route path='/'element={<> <Header/><MainContents/> </>}>
              <Route index element={<PostData tk={takePostData} />}/>
              <Route path='postdetails' element={<PostDetails dt={postD} />}/>
            </Route>

            <Route path='*' element={<NotFound />}/>
            
          </Routes>
        </div>
    </Router>
  );
}

export default App;


