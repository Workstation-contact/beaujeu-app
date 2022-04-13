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


  return (
      <div className='quiz-component-page'>
        
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