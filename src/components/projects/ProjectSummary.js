import React from 'react'
import moment from 'moment'
export default function ProjectSummary({title,content,authorFirstName,authorLastName,createdAt}) {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content gray-text text-darken-3">
                <span className="card-title">
                    {title}
            </span>
                <p>Posted By {authorFirstName} {authorLastName} </p>
                <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}
