import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import text from '../../text/strings.json'

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mql: window.matchMedia('(max-width: 992px)')
        };
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                    <div className="w-100">
                        <h1 className="mb-0">{text.about.first}
                            <span className="text-primary"> {text.about.last}</span>
                        </h1>
                        <img style={{ width: '75%', display: 'block' }} className="d-lg-none img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""></img>
                        <div className="subheading mb-5">{text.about.city}<br></br>{text.about.phone}<br></br>
                            <a href="mailto:wrosswhite@gmail.com">{text.about.email}</a>
                        </div>
                        <hr className="m-5"></hr>
                        <p>{text.about.zero}</p>
                        <hr className="m-5"></hr>
                        <p>{text.about.one}</p>
                        <hr className="m-5"></hr>
                        <p>{text.about.two}</p>
                        <div className="social-icons mt-5">
                            <a href="https://www.linkedin.com/in/wrosswhite/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/williamrosswhite">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://twitter.com/wrosswhite">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/williamrosswhite/">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;