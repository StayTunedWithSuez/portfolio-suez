import { educationData } from "../../assets/data"
import TimelineInfoCard from "../../components/common/TimelineInfoCard"

function Education() {
    return (
        <div className='space-y-4'>
            <h3 className="text-lg text-gray-900 font-semibold">Education</h3>
        
            <div className="space-y-7">
                {educationData.map((item, index) => (
                    <TimelineInfoCard key={index} year={item.year} title={item.title} institution={item.institution} description={item.description} />
                ))}
            </div>
        
        </div>
        
    )
}

export default Education