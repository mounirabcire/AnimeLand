import { useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError();
    return (
        <div className="error">
            <p className="error__msg scale-step-4">
                <span className="error__status-code scale-step-3">500</span>{" "}
                <br />
                {/* Something Went Wrong! */}
                {err.message}
            </p>
        </div>
    );
}

export default Error;
