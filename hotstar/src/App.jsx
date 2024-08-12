import React from "react";
import "./style.css"
import Navbar from "./components/navbar/Navbar";
import Mainbody from "./components/mainbody/Mainbody";
import Footer from "./components/footer/Footer";


const App=()=>{
    return(
        <div className="app">
            <Navbar/>
            <Mainbody/>
            <Footer/>
        </div>
    )
}
export default App