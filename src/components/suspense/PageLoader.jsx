
import React from "react";

function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-dark mx-auto mb-4"></div>
        <p className="text-primary-dark font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
}

export default PageLoader;