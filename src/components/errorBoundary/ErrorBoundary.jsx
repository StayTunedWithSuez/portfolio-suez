import React from "react";
import PropTypes from "prop-types"

class ErrorBoundary extends React.Component {

    state = {
        hasError: false,
        error: null,
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        }
    }

    componentDidCatch(error, info) {
        console.error("Error: ", error.message);
        console.error("Component Stack: ", info.componentStack);
    }


    render() {
        const {hasError, error} = this.state;
        const {fallback: FallbackUI, children} = this.props;

        if (hasError) {
            return <FallbackUI error = {error} />
        }

        return children
    }


}

ErrorBoundary.propTypes = {
    fallback: PropTypes.elementType.isRequired,
    children: PropTypes.node.isRequired,
}

export default ErrorBoundary;