
import PropTypes from "prop-types"

function SideIconCard({icon, keyName, value, serialEven}) {
  return (
        <div className={`flex w-full items-center p-1.5 space-x-4 ${serialEven? "bg-surface":" bg-secondary/10"}`}>

            <div className={`px-4 py-2 text-2xl xs:px-6 xs:py-4 rounded-md ${serialEven? "text-gray-900":"bg-secondary text-surface"}`}>
                {icon}
            </div>

            <div className="flex w-full text-[12px] xs:text-sm md:text-base font-medium space-x-4 items-center">
                <span className="w-1/3">{keyName}:</span>
                <span className="w-2/3 pr-3 wrap-break-words overflow-hidden">{value}</span>
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