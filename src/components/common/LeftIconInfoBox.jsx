import PropTypes from "prop-types"

function LeftIconInfoBox({Icon, title, description, tags}) {

    return (

        <div className="space-y-2 p-4 bg-purple-100 shadow-md rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center space-x-6">
                <Icon className="text-5xl " />
                <span className="text-2xl font-bold">{title}</span>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-purple-300/80 px-4 py-1 rounded-full text-sm">{tag}</span>
                ))}
                
            </div>
        </div>

    )
}

LeftIconInfoBox.propTypes = {
    Icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}
export default LeftIconInfoBox