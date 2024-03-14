import React from "react";
import ReactDOM from "react-dom/client";
// import FirstApp from "./FirstApp";
//you can rename your imports
// import  App  from "./HelloPabello";
import FirstApp from "./FirstApp";
import './styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp /> */}
        {/* <App /> */}

        <FirstApp />
    </React.StrictMode>
)