import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

const Root = () => {
    return (
        <div>
            <div className=' max-w-7xl mx-auto flex flex-col  '>
                <Header />
                <main className=' flex-grow'>
                    <Outlet />
                </main>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Root;

