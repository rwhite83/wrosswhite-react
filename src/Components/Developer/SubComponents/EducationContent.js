import React from "react"
import text from "../../../text/strings.json"

function EducationContent(props) {

    return <div>
        <h2 className="mb-5 spacer text-primary">{text.headers.education}</h2>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0">{props.name}</h3>
                <div className="subheading mb-3">{props.degree}</div>
                <div>{props.focus}</div>
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">{props.date}</span>
            </div>
        </div>
    </div>
}

export default EducationContent