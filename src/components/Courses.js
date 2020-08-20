import React from 'react';
import Add from './Add';

const Courses = ({ courseTitle, courseCredit, courseScore, courseGrade }) => {
    return (
        <div className='courses-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <p>{courseTitle}</p>
                    </div>
                    <div className='col-md-3'>
                        <p>{courseCredit}</p>
                    </div>
                    <div className='col-md-3'>
                        <p>{courseScore}</p>
                    </div>
                    <div className='col-md-3'>
                        <p>{courseGrade}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses