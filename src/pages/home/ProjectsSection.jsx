import ProjectsHeader from "../projects/ProjectsHeader"
import ProjectsElem from "../projects/ProjectsElem"

function ProjectsSection() {
    return (
        <div id = "skills" className='container-layout my-6 space-y-4'>
            <ProjectsHeader />
            <ProjectsElem />
        </div>
    )
}

export default ProjectsSection