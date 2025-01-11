import React from 'react';
import { useRouteError, Link } from "react-router-dom";

const ErrorPages = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id="error-page"
            className="mt-40 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="mb-2 text-lg">Sorry, an unexpected error has occurred.</p>
            <p className="italic mb-6 text-gray-600">
                {error.statusText || error.message}
            </p>
            <div className="p-2 border-2 bg-purple-600 text-2xl text-white border-amber-300 rounded-3xl">
                <Link to="/">Go back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPages;
