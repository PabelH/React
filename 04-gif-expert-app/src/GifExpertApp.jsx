
import { useState } from "react"


const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Fenomenoide', 'Animaniacs' ])

  return (
    <>
    
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/*Input  */}

      {/*Gif List  */}
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
