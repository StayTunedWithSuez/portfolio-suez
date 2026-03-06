
import PropTypes from "prop-types"

function TimelineInfoCard({year, title, institution, description}) {
  return (
    <div className="relative before:absolute before:content-[''] before:bg-purple-700 before:w-0.5 before:h-full before:top-1.5 before:left-1.75 before:rounded-full pl-8 transition-transform duration-300  hover:-translate-y-2 cursor-pointer">
      {/* Circle style */}
      <div className="absolute bg-purple-700 h-4 w-4 top-0 left-0 rounded-full "></div>

      {/* Text box */}
      <div className="bg-gray-200 p-5 rounded-lg shadow-md">
        <span className="text-sm text-purple-500">{year}</span>
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-sm text-gray-600">{institution}</h4>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

TimelineInfoCard.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default TimelineInfoCard;