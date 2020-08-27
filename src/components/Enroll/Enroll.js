import React from 'react';

const Enroll = (props) => {
    const enroll = props.enroll;
    const admission = 3.99 ;
     let total = 0;
     for (let i = 0; i < enroll.length; i++){
         const courses = enroll[i];
         total = total + courses.price + admission;
         
     }

     const grandTotal = (total).toFixed(2);
    return (
        <div className ="p-3">
            <h4 className="bg-dark p-2 w-100 text-white">Enroll Summary</h4>
            <h4>Total Course Enrolled: {enroll.length}</h4>
            <h5>Admission Fee: {admission}</h5>
            <h4>Total Price: {grandTotal}</h4>
        </div>
    );
};

export default Enroll;