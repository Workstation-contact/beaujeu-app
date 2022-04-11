import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './pages/Home';
import Musee from './pages/Musee';
import Parametres from './pages/Parametres';
import Quiz from './pages/Quiz';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
          <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="musee">
                        <Route index element={<Musee />} />
                    </Route>

                    <Route path="quiz">
                        <Route index element={<Quiz />} />
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
