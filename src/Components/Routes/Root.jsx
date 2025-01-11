import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main content area */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Root;
