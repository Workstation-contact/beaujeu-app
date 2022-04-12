import { QuerySnapshot } from 'firebase/firestore';
import React, { FC, useState, useEffect } from 'react';
import { arrayBuffer } from 'stream/consumers';

import db from '../../firebase';



export interface IComponentQuizProps {
  items: [];
  id: number; label: string; key: any
}

const ComponentQuiz: FC<IComponentQuizProps> = (props) => {

  const ref = db.collection("QCM")
  console.log(ref);

  const [data, setdata] = useState();
  const [loader, setloader] = useState(true);

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

  return (
      <div className='quiz-component-page'>
        
      </div>
  );
};

export default ComponentQuiz;


/*const [info , setInfo] = useState([]);
  
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