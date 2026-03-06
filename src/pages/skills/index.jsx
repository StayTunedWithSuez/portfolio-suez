import SkillElem from "./SkillElem"
import SkillHeading from "./SkillHeading"

function SkillSection() {
    return (
        <div id = "skills" className='container-layout mt-2 space-y-4'>
            <SkillHeading />
            <SkillElem />
        </div>
    )
}

export default SkillSection