import React from "react";

const ExperienceCard = props => {
    return (
        <div>
            <h4>{props.name}</h4>
            <button onClick={props.updateExperience}>edit</button>
            <button onClick={() => {props.deleteExperience(props.experience.id)}}>delete</button>
        </div>
    )
}

export default ExperienceCard;