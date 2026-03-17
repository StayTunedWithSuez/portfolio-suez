import PropTypes from "prop-types"


function CoverImageInfoBox({imageSrc, title, description, tags, demoUrl, codeUrl}) {
    return (
        <div className="space-y-2 bg-accent/10 shadow-md rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <img className="w-full h-60 object-cover" src={imageSrc} alt="Project Image" />
            <div className="px-6 py-2 space-y-4">
                <span className="block text-2xl font-bold">{title}</span>
                <p className="block">{description}</p>
                <div className="flex flex-wrap gap-4">
                    {tags.map((tag, index) => (

                        <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm" key={index}>{ tag }</span>

                    ))}
                </div>

                <span className="grid grid-cols-2 gap-4 mb-4" >
                    <a className="bg-primary text-surface py-3 px-4 font-semibold text-md rounded-lg transition duration-300 hover:bg-primary-dark text-center" href={demoUrl}>View Demo</a>
                    <a className="bg-transparent border-2  border-primary text-text-primary/90 py-[10.5px] px-4 font-semibold text-md rounded-lg transition duration-300 hover:bg-primary/20 text-center" href={codeUrl}>View Demo</a>
                </span>
            </div>
        </div>
    )
}

CoverImageInfoBox.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    demoUrl: PropTypes.string.isRequired,
    codeUrl: PropTypes.string.isRequired,
}

export default CoverImageInfoBox