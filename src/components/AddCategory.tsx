import React, { useState } from 'react'

interface AddCategoryProps {
  setCategoriesAction: any
}
 
const AddCategory: React.SFC<AddCategoryProps> = ({setCategoriesAction}) => {
  const [inputValue, setinputValue] = useState('');
  const handleChange = (e:any) => {
    setinputValue(e.target.value)
  }
  const handleSubmit = (e:any): void => {
    e.preventDefault();
    
    if(inputValue.trim().length > 2){
      setCategoriesAction((categories: any) => [ ...categories, inputValue ])
      setinputValue('')
    }
  }
  return ( 
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
    </form>
   );
}
 
export default AddCategory;