import React from 'react'

const Calculate = ({ calcGp, gpa, credit, points }) => {

    const findGp = () => {
        calcGp('pie')
    }

    return (
        <div className='calculate'>
            <button onClick={e => findGp(e)} className='btn btn-outline-dark'>Calculate your GP</button>
            <h3>Your Grade Point Average is: {gpa}</h3>
            <p>Your total number of Units is: {credit}</p>
            <p>Your total number of points is: {points}</p>
        </div>
    )
}

export default Calculate;