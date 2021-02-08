import React from 'react'

export interface GiftGridItemProps {
  title: string,
  url: string
}
 
const GiftGridItem: React.SFC<GiftGridItemProps> = ({title, url}) => {
  return ( 
    <div className="card">
      <img src={url} />
      <h3>{title}</h3>
    </div>
   );
}
 
export default GiftGridItem;