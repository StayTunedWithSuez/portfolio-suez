
import PropTypes from "prop-types"

function SideIconCard({icon, keyName, value, serialEven}) {
  return (
        <div className={`flex rounded-md w-full p-1.5 items-center space-x-6 ${serialEven? "bg-white":" bg-gray-200"}`}>

            <div className={`px-6 py-4 text-2xl rounded-md ${serialEven? "text-gray-900":"bg-purple-700 text-white"}`}>
                {icon}
            </div>

            <div className="flex w-full text-sm md:text-base text-gray-800 font-medium space-x-4">
                <span className="w-1/3">{keyName}:</span>
                <span className="w-2/3 pr-2 wrap-break-words overflow-hidden">{value}</span>
            </div>

        </div>
  )
}

SideIconCard.propTypes = {
    icon: PropTypes.element.isRequired,
    keyName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    serialEven: PropTypes.bool.isRequired
}

export default SideIconCard