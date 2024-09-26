
import { useState } from "react"


const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Fenomenoide', 'Animaniacs' ]);
  const onAddCategory = () => {
    const newCategory = categories.length + 1;
    setCategories([...categories, newCategory]);
  }

  return (
    <>
    
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/*Input  */}

      {/*Gif List  */}
      <button onClick={onAddCategory}>Add</button>
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
