import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                    <div className="w-100">
                        <h1 className="mb-0">Ross
                            <span className="text-primary"> White</span>
                        </h1>
                        <div className="subheading mb-5">New Westminster, BC<br></br>(604) 404-0002<br></br>
                            <a href="mailto:name@email.com"> wrosswhite@gmail.com</a>
                        </div>
                        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="social-icons">
                            <a href="https://google.ca">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://google.ca">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://google.ca">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://google.ca">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;