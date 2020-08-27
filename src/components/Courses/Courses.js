import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Courses.css';
import SingleCourse from '../SingleCourse/SingleCourse'
import Enroll from '../Enroll/Enroll';

const Courses = () => {
    const first20 = fakeData.slice(0,20);
    const [courses, setCourses] = useState(first20);
    const [enroll, setEnroll] = useState([]);
    const handleCourseEnroll = (courses) => {
        const newEnroll = [...enroll, courses];
        setEnroll(newEnroll);
    }
    return (
        <div className = "courses-container">
            <div className="single-course">
                <ul>
                    {
                        courses.map(course => <SingleCourse handleCourseEnroll = {handleCourseEnroll} courses ={course}></SingleCourse>)
                    }
                </ul>
            </div>

            <div className="cart-container">
                <Enroll enroll = {enroll}></Enroll>
            </div>

            
        </div>
    );
};

export default Courses;