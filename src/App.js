import React from "react";
import "./App.css";
import Spotlight from "./components/includes/Spotlight";
import Course from "./components/Course";
import Footer from "./components/includes/Footer";

function App() {
    return (
        <>
            <Spotlight />
            <Course />
            <Footer/>
        </>
    );
}

export default App;
