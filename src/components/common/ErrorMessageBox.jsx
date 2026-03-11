import { GrCircleInformation } from "react-icons/gr";
import PropTypes from 'prop-types'

function ErrorMessageBox({errorMessage}) {
    return (
        <div className="flex p-3 items-center justify-center space-x-4 border border-gray-400 rounded-lg">
            <GrCircleInformation className="text-4xl text-red-600" />
            <span className="leading-snug text-[16px] font-medium">{errorMessage}</span>
        </div>
    )
}

ErrorMessageBox.propTypes = {
    errorMessage: PropTypes.string.isRequired,
}

export default ErrorMessageBox