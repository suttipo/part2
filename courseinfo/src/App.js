//import Header from "./Header";
//import Content from "./Content";
//import Total from "./Total";
import Course from "./components/Course"

const App = () => {

  const course = [ 
  {
  name :"Half Stack application development",
  id: 1,
  parts:[
    {
    name:"Fundamentals of React",
    exercises: 10,
    id: 1
},
  
    {
    name:"Using props to pass data",
    exercises: 7,
    id: 2
},
  
    {
    name:"State of a component",
    exercises: 14,
    id: 3
},
    {
      name:"Redux",
      exercises: 11,
      id: 4
    }
  ]
},
{
  name: 'Node.js',
  id: 2,
  parts: [
    {
      name:'Routing',
      exercises: 3,
      id: 1
    },
    {
      name: 'Middle Ware',
      exercises: 7,
      id: 2
    }
    
  ]
}
  ]
  console.log('course', course);
  
  return (
  <div>
    {/*
    <Course course={course[0]} />
    <Course course={course[1]} />
  */}
  {course.map((ele) => <Course course={ele} key={ele.id}/>) }
  </div>
  
  )
}

export default App;
