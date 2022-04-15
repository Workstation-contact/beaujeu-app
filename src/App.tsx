import { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lottie from "lottie-react";
import Test from "./lottie/loading.json";

import Header from './components/Header';

import ClipLoader from "react-spinners/ClipLoader";

import RockPage from './pages/RockPage';
import HomePage from './pages/Home';
import Quiz from './pages/Quiz';
import PickQuiz from './pages/PickQuiz';

import firestore from 'firebase/firestore';

function App() {

    const [loading, setLoading] = useState(false);
        useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);
    
  return (
    <div className="App">

        {loading ? 
        (
            <div className='lottie'>
                <Lottie animationData={Test}/>
            </div>
        )
        : 
        (<BrowserRouter>
            <Header/>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="quiz">
                        <Route index element={<Quiz />} />
                    </Route>
                    <Route path="pickquiz">
                        <Route index element={<PickQuiz />} />
                    </Route>
                    <Route path="rockpage">
                        <Route index element={<RockPage />} />
                    </Route>
                  </Routes>
              </BrowserRouter>)
        }
    </div>
  );
}

export default App;
