import React, { FC } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';



export interface ICollectionProps {}

const Collection: FC<ICollectionProps> = (props) => {

  return (        

    <div>
      <div className='collection-title-container'>
        <h1>Choissez vos collection</h1>
      </div>

      <div className='collection_slide'>

        <Link reloadDocument to="/pickquiz">
          <div className="collection_slide_img pierre">
            <h2>Lapidaires</h2>
          </div>
        </Link>

        <Link reloadDocument to="/pickquiz">
          <div className="collection_slide_img classe">
            <h2>Period Room : <br /> Salle de classe</h2>
          </div>
        </Link>

        <Link reloadDocument to="/pickquiz">
          <div className="collection_slide_img ethnographie">
            <h2>Ethnographie</h2>
          </div>
        </Link>

        <Link reloadDocument to="/pickquiz">
          <div className="collection_slide_img beaujolais">
            <h2>Period Room : Intèrieur Beaujolais</h2>
          </div>
        </Link>

        <Link reloadDocument to="/pickquiz">
          <div className="collection_slide_img artgraphique">
            <h2>Art graphique</h2>
          </div>
        </Link>

        <Link reloadDocument to="/pickquiz">
          <div className="collection_slide_img compagnon">
            <h2>Compagnonage</h2>
          </div>
        </Link>

        <Link reloadDocument to="/pickquiz">
          <div className="collection_slide_img economie">
            <h2>Economie du territoire</h2>
          </div>
        </Link>

        <Link reloadDocument to="/pickquiz">
          <div className="collection_slide_img vignologie">
            <h2>Vignologie</h2>
          </div>
        </Link>
      </div>          
    </div>


        
  );
};

export default Collection;

        
        



