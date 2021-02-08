import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';


const GistExpertApp = (): JSX.Element => {
  const [categories, setCategories] = useState(['One Push'])
  return ( 
    <>
      <h2>GiftExpertApp</h2>
      <hr/>
      <AddCategory
        setCategoriesAction={setCategories}
      />
      <ul>
        {
          categories.map((el, i) => (
            <GiftGrid
            key={i}
              category={el}
            />
          ))
        }
      </ul>
    </>
   );
}
 
export default GistExpertApp;



