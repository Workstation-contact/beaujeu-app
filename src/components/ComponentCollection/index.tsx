import React, { FC } from 'react';
import './index.scss';
import Pierre from '../../images/pierre.jpg';



export interface ICollectionProps {}

const Collection: FC<ICollectionProps> = (props) => {

  return (        

    <div>
      <h1>Choissez vos collection</h1>

    <div className='collection_slide'>

    <div className="collection_slide_img">
      <a href=""><img src={Pierre} alt="" /></a>
    </div>

    <div className="collection_slide_img">
      <a href=""><img src={Pierre} alt="" /></a>
    </div>

    <div className="collection_slide_img">
    <a href=""><img src={Pierre} alt="" /></a>
    </div>

    <div className="collection_slide_img">
    <a href=""><img src={Pierre} alt="" /></a>
    </div>

    <div className="collection_slide_img">
      <a href=""><img src={Pierre} alt="" /></a>
    </div>

    

  
  </div>          
  </div>


        
  );
};

export default Collection;

        
        



