import PropTypes  from "prop-types"

const CounterApp = ({value}) => {

  const handleAdd = (event, newValue) => {
    // console.log(event)
    console.log(newValue);
  }


  return (
    <>
    <h1>CounterApp</h1>
    <h2> { value } </h2>

    <button onClick={ (event) => handleAdd(event, 'Hi!')}>
      +1
    </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
    
  }
  

export default CounterApp
