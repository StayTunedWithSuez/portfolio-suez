import PropTypes from "prop-types"

function ErrorFallbackUI({error}) {
    return (
        <div className="text-center p-6">
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <p className="text-red-500">{error?.message}</p>
        </div>
    )
}

ErrorFallbackUI.propTypes = {
    error: PropTypes.object,
}

export default ErrorFallbackUI