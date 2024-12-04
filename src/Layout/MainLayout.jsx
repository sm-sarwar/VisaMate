import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
const MainLayout = () => {
    return (
        <div>
            <header>
                <nav className='sticky top-0 z-50 backdrop-blur-3xl'>
                     <Navbar></Navbar>
                </nav>
                <section>
                    <Banner></Banner>
                </section>
            </header>

            <main></main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;