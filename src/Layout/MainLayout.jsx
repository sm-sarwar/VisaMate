import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
const MainLayout = () => {
    return (
        <div>
            <header>
                <nav>
                     <Navbar></Navbar>
                </nav>
                <section>
                    <Banner></Banner>
                </section>
            </header>

            <main></main>
            <footer></footer>
        </div>
    );
};

export default MainLayout;