import React from "react";
import text from "../../text/strings.json"
import EducationContent from "./SubComponents/EducationContent.js";

const edu = text.education.map(data => <EducationContent data/>)

class Education extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0">

                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">

                    <div className="w-100">

                        <div>{edu}</div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Education;