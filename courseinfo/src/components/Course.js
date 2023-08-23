import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
const Course = ({course}) => {
    console.log("course", course);
    //extrac parts from course
    //const {parts} = course;
    //console.log('parts',parts);
    //loop parts for sum of exercises
    //let sumOfExercise = parts.reduce((acc, current) => acc + current['exercises'], 0);
    /*
    for(let i = 0; i < parts.length; i++){
        console.log('exercises', parts[i].exercises)
        sumOfExercise += parts[i].exercises;
    }
      */

    //console.log("sum", sumOfExercise)
    return (
        <div>
            <Header course={course}/>
            <Content course={course} />
            <Total parts={course.parts}/> 
        </div>
        
    )
}

export default Course;