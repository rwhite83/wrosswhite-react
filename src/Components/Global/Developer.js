import React from "react";
import About from "../Developer/About"
import Education from "../Developer/Education"
import Skills from "../Developer/Skills"
import Projects from "../Developer/Projects"
import Interests from "../Developer/Interests"
import Extracurricular from "../Developer/Extras"
import Social from "../Developer/Social"
import 'bootstrap/dist/css/bootstrap.min.css';

class Developer extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0" >
                <About />
                <hr className="m-0"></hr>
                <Education />
                <hr className="m-0"></hr>
                <Skills />
                <hr className="m-0"></hr>
                <Projects />
                <hr className="m-0"></hr>
                <Interests />
                <hr className="m-0"></hr>
                <Extracurricular />
                <hr className="m-0"></hr>
                <Social />
            </div>
        );
    }
}

export default Developer;