import { useEffect } from "react";
import PropTypes from "prop-types";

function Modal({ isOpen, onClose, children }) {
    // 🔹 Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    // 🔹 Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center 
            transition-all duration-300
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Box */}
            <div
                onClick={(e) => e.stopPropagation()} // 🔹 prevent closing when clicking inside
                className={`relative bg-white rounded-2xl shadow-xl w-full max-w-xl mx-6 p-4 z-10
                transform transition-all duration-300
                ${isOpen ? "scale-100" : "scale-95"}`}
            >
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;