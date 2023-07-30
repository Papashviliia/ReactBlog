import React from "react";
import './WorkLifeParagraph.css'

const WorkLifeForm = ({WorkLifeParagraph}) =>{
    return(
        <div className="WorkLifeForm">
            <h2>Work & Life</h2>
            <p>{WorkLifeParagraph}</p>
        </div>
    )
}

export default  WorkLifeForm;