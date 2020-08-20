import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Add from './components/Add';
import Courses from './components/Courses';
import Calculate from './components/Calculate';
const uuid = require('uuid');

function App() {

  const [courses, setCourses] = useState([]);
  const [creditt, setCredit] =useState([]);
  const [gpa, setGpa] = useState({
    gpa: '',
    credit: '',
    points: ''
  })

  const addCourse = (grades) => {
    const { course, credit, score, grade } = grades;

    setCourses(prev => {
      return [...prev, grades]
    })
  
    setCredit(prev => {
      return [...prev, credit]
    })
  }

  const findGp = () => {
      const arrSum = arr => arr.reduce((a,b) => a + b, 0);
      const points = courses.map(course => {
        if (course.score >= 75) {
        return (4 * course.credit);
      } else if (course.score >= 70 && course.score <= 74 ) {
        return (3.5 * course.credit);
      } else if (course.score >= 65 && course.score <= 69 ) {
        return (3.25 * course.credit);
      } else if (course.score >= 60 && course.score <= 64 ) {
        return (3 * course.credit);
      } else if (course.score >= 55 && course.score <= 59 ) {
        return (2.75 * course.credit);
      } else if (course.score >= 50 && course.score <= 54 ) {
        return (2.5 * course.credit);
      } else if (course.score >= 45 && course.score <= 54 ) {
        return (2.25 * course.credit);
      } else if (course.score >= 40 && course.score <= 44 ) {
        return (2 * course.credit);
      } else if (course.score <= 39 ) {
        return (0 * course.credit);
      }})
      const creditInt = creditt.map(credit => Number(credit));
      const gpa = (arrSum(points)/arrSum(creditInt)).toFixed(2);
    
      setGpa({
        gpa,
        credit: arrSum(creditInt),
        points: arrSum(points)
      })
    }

  return (
    <section className='main-container'>
      <Layout />
      <Add 
        onAdd={addCourse}/>
      {courses.map(course => {
        const creditPoints = course.credit * course.score
        if (course.score >= 75) {
          course.grade = 'A'
        } else if (course.score >= 70 && course.score <= 74 ) {
          course.grade = 'AB'
        } else if (course.score >= 65 && course.score <= 69 ) {
          course.grade = 'B'
        } else if (course.score >= 60 && course.score <= 64 ) {
          course.grade = 'BC'
        } else if (course.score >= 55 && course.score <= 59 ) {
          course.grade = 'C'
        } else if (course.score >= 50 && course.score <= 54 ) {
          course.grade = 'CD'
        } else if (course.score >= 45 && course.score <= 54 ) {
          course.grade = 'D'
        } else if (course.score >= 40 && course.score <= 44 ) {
          course.grade = 'E'
        } else if (course.score <= 39 ) {
          course.grade = 'F'
        } 
        return (
          <div>
          <Courses key={uuid.v4()} courseTitle={course.course} courseCredit={course.credit} courseScore={course.score} courseGrade={course.grade}/>
          </div>
          )
      })}
      <Calculate calcGp={findGp} gpa={gpa.gpa} credit={gpa.credit} points={gpa.points}/>
      
  
      
    </section> 
  );
}

export default App;
