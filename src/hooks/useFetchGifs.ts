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
        setState({
          data: img,
          loading: false
        })
    })
  }, [category])

  return state;

}
 
export default UserFetchGifs;