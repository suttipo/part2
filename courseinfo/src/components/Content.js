import Part from "./Part";

const Content = ({course}) => {
    console.log("Content",course);

    return (
        <div>{/*
            <Part name={course.parts[0].name} exercises={course.parts[0].exercises}/>
            <Part name={course.parts[1].name} exercises={course.parts[1].exercises}/>
            <Part name={course.parts[2].name} exercises={course.parts[2].exercises}/>
    */}
        {course.parts.map((part) => 
        <Part name={part.name} exercises={part.exercises} key={part.id}/> 
        )}
        </div>
    )
}

export default Content;