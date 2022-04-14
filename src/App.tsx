import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import HomevPage from './pages/Homev2';
import Musee from './pages/Musee';
import Parametres from './pages/Parametres';
import Quiz from './pages/Quiz';
import PickQuiz from './pages/PickQuiz';

import firestore from 'firebase/firestore';


function App() {

  return (
    <div className="App">

    <BrowserRouter>
          <Header/>
                <Routes>
                    <Route path="/" element={<HomevPage />} />
                    <Route path="musee">
                        <Route index element={<Musee />} />
                    </Route>

                    <Route path="quiz">
                        <Route index element={<Quiz />} />
                    </Route>

                    <Route path="pickquiz">
                        <Route index element={<PickQuiz />} />
                    </Route>

                    <Route path="parametres">
                        <Route index element={<Parametres />} />
                    </Route>
                </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
