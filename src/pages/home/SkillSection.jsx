import SkillElem from "../skills/SkillElem"
import SkillHeading from "../skills/SkillHeading"

function SkillSection() {
    return (
        <div id = "skills" className='container-layout mt-2 space-y-4'>
            <SkillHeading />
            <SkillElem />
        </div>
    )
}

export default SkillSection