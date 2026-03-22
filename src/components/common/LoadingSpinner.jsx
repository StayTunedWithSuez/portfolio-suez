
function LoadingSpinner() {
    return (

        <div className="mt-20 flex items-center justify-center z-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-primary-dark mx-auto mb-4"></div>
            </div>
        </div>
        
    )
}

export default LoadingSpinner