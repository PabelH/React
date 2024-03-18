// import { Fragment } from "react"
// <Fragment></Fragment> === <></>
//you can render JS expressions as long as it is not an object
//if you don't need to render again
// const newMessage = 'Pabelon';
// const newMessage = {
//     message: 'Hi there',
//     author: 'Pabelon'
// };

// const getGreet = () => 'Kiobole';

const FirstApp = (props) => {
    
  return (
    <> 
    {/* <h1> { newMessage } </h1>  If the variable is an object this is not allowed*/}
    {/* <h1> { newMessage.message } </h1>  If the variable is an object this is allowed*/}
    {/* <h1> { newMessage.message } </h1>  Ifyou need the object do this*/}
    {/* <code> { JSON.stringify( newMessage) } </code> */}
    {/* <h1> { getGreet() } </h1>  */}
    <h1>{props.title}</h1>
    <h2>I am Learning</h2>
    
    </>
  )
}

export default FirstApp
