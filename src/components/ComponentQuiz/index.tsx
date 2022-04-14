import './index.scss';
import Transfert from '../../images/transfert.svg';
import { Link } from 'react-router-dom';

import { getDocFromCache, getDocs, QuerySnapshot } from 'firebase/firestore';
import React, { FC, useState, useEffect } from 'react';
import { arrayBuffer } from 'stream/consumers';

import db from '../../firebase'; 
import { collection } from 'firebase/firestore'
import { doc, getDoc,  onSnapshot } from "firebase/firestore";

import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/firestore';


export interface IComponentQuizProps {
  
}

const ComponentQuiz: FC<IComponentQuizProps> = (props) => {

  const [datasotre, setDataStore] = useState([]);
  const datasCollectionRef = db.collection("QCM");

  useEffect (() => {

    const getDatas = async () => {
        const data = await getDocs(datasCollectionRef);
        // setDataStore(data.docs.map((doc) => ({...doc.data(),id: doc.id})))
        
        console.log(data);
    }
  
    getDatas();
  }, []);
  // console.log(userDetails)
  // const ref = db.collection("QCM")
  // console.log(ref);

  const [resultsOpen, setResultsOpen] = useState(false)
  const handleResultsOpen = () => {
    setResultsOpen(!resultsOpen)
  }


  return (
    <div className='quiz-component-page'>

      {/* VUE QUESTIONS */}
      <div className={`quiz-questions ${resultsOpen ? "display-none" : "display-block"} `}>

        {/* BLOC TITLE */}
        <div className='quiz-questions-title-container'>
          <h1>NOM DE LA PIERRE</h1>
          <h2>Question n° 1</h2>
          <p>Ceci est une question, ceci est-ce réellement une question ?</p>
        </div>

        {/* BLOC QUESTION CARDS */}
        <div className='quiz-questions-questions-container'>
          <div onClick={handleResultsOpen} className='quiz-questions-question-card'>
            <h3>A.</h3>
            <p>Ceci est une réponse à la question posée précédemment.</p>
          </div>
          <div onClick={handleResultsOpen} className='quiz-questions-question-card'>
            <h3>B.</h3>
            <p>Ceci est une réponse à la question posée précédemment.</p>
          </div>
          <div onClick={handleResultsOpen} className='quiz-questions-question-card'>
          <h3>C.</h3>
          <p>Ceci est une réponse à la question posée précédemment.</p>
          </div>
        </div>
      </div>


      {/* VUE RESULTS */}
      <div className={`quiz-results ${!resultsOpen ? "display-none" : "display-block"} `}>
        
        {/* BLOC TITLE */}
        <div className='quiz-results-title-container'>
          <h1>RESULTATS</h1>
          <h1>NOM DE LA PIERRE</h1>
        </div>

        {/* BLOC RESULTS */}
        <div className='quiz-questions-results-container'>
          <h3>Bravo !</h3>
          <h2>20/20</h2>
        </div>

        {/* BLOC BUTTONS */}
        <div className='quiz-questions-buttons-container'>
          <div>
            <Link reloadDocument to="/pickquiz">
              <div>
                <p>Continuer</p>
              </div>
            </Link>
            <Link reloadDocument to="/quiz">
              <div>
                <p>Recommencer</p>
              </div>
            </Link>
          </div>
          <div>
            <div>
              <img src={Transfert} alt="Icone Transfert" />
              <p>Partagez votre succès</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  );
};

export default ComponentQuiz;


/*

const docRef = doc(db);
    const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");

  
  }

function getData() {
    ref.onSnapshot((QuerySnapshot) => {

      

      const items = [] ;
      QuerySnapshot.forEach((doc)=> {
          items.push(doc.data())
      })
      setdata(items)
      setloader(false)

    })
  }

  useEffect (() =>  {
    getData()
    console.log(data);
  })


const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("QCM").get().then((querySnapshot) => {
           
        })
    }

    console.log(Fetchdata);*/