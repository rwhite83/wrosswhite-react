import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import text from '../../text/strings.json'

class About extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                    <div className="w-100">
                        <h1 className="mb-0">{text.about.first}
                            <span className="text-primary"> {text.about.last}</span>
                        </h1>
                        <div className="subheading mb-5">{text.about.city}<br></br>{text.about.phone}<br></br>
                            <a href="mailto:name@email.com">{text.about.email}</a>
                        </div>
                        <p className="lead mb-5">{text.about.zero}<br></br><br></br>{text.about.one}<br></br><br></br>{text.about.two}</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/wrosswhite/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/rwhite83">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://twitter.com/wrosswhite">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/williamrosswhite/">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;