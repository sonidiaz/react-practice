import React, { useEffect, useState } from 'react'
import GiftGridItem from './GiftGridItem'
import { getGifts } from '../helpers/getGifts';

export interface GiftGridProps {
  category: any
}
 
const GiftGrid: React.SFC<GiftGridProps> = ({category}) => {
  const [images, setimages] = useState([])
  useEffect(() => {
    getGifts(category)
      .then(setimages)
  }, [])
  return ( 
    <>
      <h3>{category}</h3>
      <div className="card-grid">
          {
            images.map((img: any) => (
              <GiftGridItem
                key={img.id}
                {...img}
              />
              ))
            }
      </div>
    </>
   );
}
 
export default GiftGrid;