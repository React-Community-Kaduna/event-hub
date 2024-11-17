import PropTypes from "prop-types";
export default function AuthenticationForm({ children }) {
    return (
        <div className="bg-white p-3 shadow-xl mx-auto w-full my-10 mb-20 pb-14 md:my-0 md:w-fit sm:px-11 rounded-md">
            {children}
        </div>
    )
}


AuthenticationForm.propTypes = {
    children: PropTypes.node.isRequired
}