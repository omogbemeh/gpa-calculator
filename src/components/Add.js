import React, { useState } from 'react'


const Add = ({ onAdd }) => {

    const [grades, setGrades] = useState({
        course: '',
        credit: '',
        score: '',
        grade: '',
    })

    const [isEnabled, setIsEnabled] = useState(true)

    const { course, grade } = grades

    const score = Number(grades.score);
    const credit = Number(grades.credit);

    const onChange = (e) => {
        setGrades({...grades, [e.target.name] : e.target.value})
        if (course.length > 0) {
            setIsEnabled({
                isEnabled: !isEnabled
            })
        }
    }

    const addCourse = (e) => {
        e.preventDefault();
        onAdd(grades)
        setGrades({
            course: '',
            credit: '',
            score: '',
            grade: ''
        })
    }

    

    return (
        <div className='add'>
            <form>
                <label htmlFor="">Course Name:</label><input type="text" name='course' placeholder='Enter Course Name' value={course} onChange={e => onChange(e)} required/> <br/>
                <label htmlFor="">Credit / Units (maximum of 4 units)</label><input type="number" min='0' max='4' name='credit' value={credit} onChange={e => onChange(e)} required/> <br/>
                <label htmlFor="">Score</label><input type="text" name='score' placeholder='Enter Grade' value={score} onChange={e => onChange(e)} required/> <br/>
                <button className='btn btn-lg-outline' onClick={e => addCourse(e)} type='submit'>Add Course</button>
            </form>

            <hr/>
            
            <div>
                <div className='course-container'>
                        
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <h4>Course</h4>
                            </div>
                            <div className='col-md-3'>
                                <h4>Credit / Units</h4>
                            </div>
                            <div className='col-md-3'>
                                <h4>Score</h4>
                            </div>
                            <div className='col-md-3'>
                                <h4>Grade</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;