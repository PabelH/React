// import { Fragment } from "react"
// <Fragment></Fragment> === <></>
//you can render JS expressions as long as it is not an object
//if you don't need to render again
const newMessage = 'Pabelon';

const FirstApp = () => {
    
  return (
    <> 
    <h1> { newMessage } </h1>
    <h2>I am Learning</h2>
    
    </>
  )
}

export default FirstApp
