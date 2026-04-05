import {useState, useEffect} from 'react'
import GetData from '../../utils/GetData'


function searchCourses(query,courses) { //pass in list of courses, and query
  //i think loading the courses json on search might be a poor idea
  //especially since this is called onChange in the search bar.

  if (!query.trim()) return []; //empty search when nothin searched

  return courses.filter(course =>
    course.courseID.toLowerCase().includes(query.toLowerCase())
  ); //if a courseID contains search item returns in array.
}

export default searchCourses