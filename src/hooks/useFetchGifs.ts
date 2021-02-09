import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifts';

const UserFetchGifs = (category: any) => {
  
  const [state, setState] =  useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGifts(category)
      .then(img => {
        setTimeout(() => {
          setState({
            data: img,
            loading: false
          })
        }, 3000);
    })
  }, [category])

  return state;

}
 
export default UserFetchGifs;