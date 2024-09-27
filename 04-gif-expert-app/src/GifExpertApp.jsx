
import { useState } from "react"
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Fenomenoide', 'Animaniacs' ]);
  const onAddCategory = () => {
    //one way
    //setCategories( cat => [ ...categories, 'one add' ] )
    //another way
    const newCategory = categories.length + 1;
    setCategories([...categories, newCategory]);
  }

  return (
    <>
    
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/*Input  */}
      <AddCategory setAddCategory={setCategories} />

      {/*Gif List  */}
      {/* <button onClick={onAddCategory}>Add</button> */}
      <ol>
          {
          categories.map( category => {
              return <li key={ category }>{category}</li>
          } )
          
          }
      </ol>
      
    </>
  )
}

export default GifExpertApp
