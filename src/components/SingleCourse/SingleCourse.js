import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import './SingleCourse.css';
import Button from 'react-bootstrap/Button';

const SingleCourse = (props) => {
    const {img, name, mentor, price} = props.courses;
    return (
        <div className = "course border border-secondery shadow-sm">

            <div className="img-thumbnail mr-5">
                <img className="" src={img} alt=""/>
            </div>

            <div className="course-info">
                <h3 className ="course-name">{name}</h3>
                <br/>
                <p><small>Mentor: {mentor}</small></p>
                <h4>$ {price}</h4>
                <button className ="btn btn-success" onClick = { () => props.handleCourseEnroll(props.courses)}><FontAwesomeIcon icon={faHandPointRight} /> ENROLL NOW</button>
            </div>
            
        </div>
    );
};

export default SingleCourse;