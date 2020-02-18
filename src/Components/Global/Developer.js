import React from "react";
import About from "../Developer/About"
import Experience from "../Developer/Experience"
import Education from "../Developer/Education"
import Skills from "../Developer/Skills"
import Interests from "../Developer/Interests"
import Awards from "../Developer/Awards"
import 'bootstrap/dist/css/bootstrap.min.css';

class Developer extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0" >
                <About />
                <hr className="m-0"></hr>
                <Experience />
                <hr className="m-0"></hr>
                <Education />
                <hr className="m-0"></hr>
                <Skills />
                <hr className="m-0"></hr>
                <Interests />
                <hr className="m-0"></hr>
                <Awards />
                }
            </div>
        );
    }
}

export default Developer;