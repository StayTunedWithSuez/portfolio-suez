import LeftIconInfoBox from "../../components/common/LeftIconInfoBox"
import { skillData } from "../../assets/data"

function SkillElem() {
    return (


        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {skillData.map((item, index) => (
                <LeftIconInfoBox key={index} Icon={item.icon} title={item.title} description={item.description} tags={item.tags}/>
            ))}
        </div>

    )
}

export default SkillElem