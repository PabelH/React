import { useState } from 'react'



const AddCategory = () => {


    const [ inputValue, setInputValue ] = useState('123');

    // const onInputChange = (event)=>{
    //     console.log(event.target.value);
    //     setInputValue(event.target.value);
    //clean code
    const onInputChange = ({target})=>{
        console.log(target.value);
        setInputValue(target.value);

    }
  return (
    <input 
        type="text"
        placeholder="Search gifs"
        value={ inputValue }
        //onChange={ (event) => onInputChange(event) }
        onChange={ onInputChange }
    />
  )
}

export default AddCategory
