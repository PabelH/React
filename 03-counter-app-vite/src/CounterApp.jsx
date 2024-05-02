import PropTypes  from "prop-types"

const CounterApp = ({value}) => {
  return (
    <>
    <h1>CounterApp</h1>
    <h2> { value } </h2>

    <button onClick={ function() {console.log('Hello Pabello')} }>
      +1
    </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
    
  }
  

export default CounterApp
