// import { Fragment } from "react"
// <Fragment></Fragment> === <></>
//you can render JS expressions as long as it is not an object
//if you don't need to render again
// const newMessage = 'Pabelon';
const newMessage = {
    message: 'Hi there',
    author: 'Pabelon'
};

const FirstApp = () => {
    
  return (
    <> 
    {/* <h1> { newMessage } </h1>  If the variable is an object this is not allowed*/}
    <h1> { newMessage.author } </h1>
    <h2>I am Learning</h2>
    
    </>
  )
}

export default FirstApp
