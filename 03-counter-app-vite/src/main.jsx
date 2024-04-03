import React from "react";
import ReactDOM from "react-dom/client";
// import FirstApp from "./FirstApp";
//you can rename your imports
// import  App  from "./HelloPabello";
import FirstApp from "./FirstApp";
import './styles.css'
import CounterApp from "./CounterApp";



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp /> */}
        {/* <App /> */}

        <CounterApp value={5} />
    </React.StrictMode>
)