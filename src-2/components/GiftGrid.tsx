import React, { useEffect, useState } from 'react'
import GiftGridItem from './GiftGridItem'
import UserFetchGifs from '../hooks/useFetchGifs';

export interface GiftGridProps {
  category: any
}
 
const GiftGrid: React.SFC<GiftGridProps> = ({category}) => {

  const {data:images, loading} = UserFetchGifs(category)
 
  return ( 
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          loading ? (
            <p>Loading data...</p>
          ) : (
            images.map((img: any) => (
              <GiftGridItem
                key={img.id}
                {...img}
              />
              ))
          )
        }
      </div>
    </>
   );
}
 
export default GiftGrid;