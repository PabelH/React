function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState("#111");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      '#08122F',
      '#0641F9',
      '#000000',
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9"
    ];

    let randIndex = Math.floor(Math.random() * quotes.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randIndex]);
    setColor(colors[randColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <div className="container pt-5">
        <div style={{ backgroundColor: color}}  className="jumbotron">
          <div className="card">
            <div className="card-header"><h2>Inspirational Quotes</h2></div>
            <div className="card-body">
              {randomQuote ? (
                <>
                  <h5 className="card-title">
                    - {randomQuote.author || "Anonymous"}
                  </h5>
                  <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="row">
                <button style={{ backgroundColor: color}} onClick={getNewQuote} className="btn btn-primary ml-3">
                  New Quote
                </button>
                <a
                  href={
                    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                    encodeURIComponent(
                      '"' + randomQuote.text + '" ' + randomQuote.author
                    )
                  }
                  title="Tweet this quote!"
                  target="_blank"
                  className="btn btn-warning"
                  id="tweet-quote"
                  style={{ backgroundColor: color }} 
                >
                  <i className="fa fa-twitter"></i>
                </a>

              </div>
            </div>
            <div class="footer"><p>by: <a href="https://github.com/PabelH">PabelH</a></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));