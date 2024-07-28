import Project from "../components/Project"
import myProjects from "../projects.json"
import { useEffect, useState } from "react"


const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(myProjects)
    }, [])
    
  return (
    <>
        <h1>Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {projects.map((project, index) => {
            return <Project key={index + "-project"} project={project} />
        })}
        </div>
    </>
  )
}

export default Portfolio