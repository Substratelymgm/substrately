import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>
                <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
                <Link to="/">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
