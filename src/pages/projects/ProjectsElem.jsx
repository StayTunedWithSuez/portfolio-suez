import CoverImageInfoBox from "../../components/common/CoverImageInfoBox"
import { projectsData } from "../../assets/data"

function ProjectsElem() {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
            {projectsData.map((item, index) => (
                <CoverImageInfoBox key={index} imageSrc={item.image} title={item.title} description={item.description} tags={item.tech} codeUrl={item.code} demoUrl={item.demo} />
            ))}
        </div>
    )
}

export default ProjectsElem