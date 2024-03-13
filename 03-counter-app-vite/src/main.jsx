import React from "react";
import ReactDOM from "react-dom/client";
// import FirstApp from "./FirstApp";
//you can rename your imports
import  App  from "./FirstApp";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp /> */}
        <App />
    </React.StrictMode>
)