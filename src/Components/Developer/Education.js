import React from "react";
import text from "../../text/strings.json"

class Education extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0">

                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">

                    <div className="w-100">
                        <h2 className="mb-5 spacer text-primary">{text.headers.education}</h2>
                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="resume-content">
                                <h3 className="mb-0">{text.education.bcit.name}</h3>
                                <div className="subheading mb-3">{text.education.bcit.degree}</div>
                                <div>{text.education.bcit.focus}</div>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">{text.education.bcit.date}</span>
                            </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                            <div className="resume-content">
                                <h3 className="mb-0">{text.education.ubc.name}</h3>
                                <div className="subheading mb-3">{text.education.ubc.degree}</div>
                                <div>{text.education.ubc.focus}</div>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">{text.education.ubc.date}</span>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Education;