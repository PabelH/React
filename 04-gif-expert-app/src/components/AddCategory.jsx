import { useState } from 'react'



const AddCategory = ( {setCategories} ) => {


    const [ inputValue, setInputValue ] = useState('123');

    // const onInputChange = (event)=>{
    //     console.log(event.target.value);
    //     setInputValue(event.target.value);
    //clean code
    const onInputChange = ({target})=>{
        // console.log(target.value);
        setInputValue(target.value);

    }

  const onSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    if ( inputValue.trim().length <= 1 ) return;
    // console.log(inputValue);
    setCategories( (categories) => [inputValue, ...categories] );
    setInputValue = '';

  }
  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input 
        type="text"
        placeholder="Search gifs"
        value={ inputValue }
        //onChange={ (event) => onInputChange(event) }
        onChange={ onInputChange }
      />
    </form>
  )
}

export default AddCategory
