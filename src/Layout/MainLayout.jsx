import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import LatestVisas from '../Components/LatestVisas';
const MainLayout = () => {
    return (
        <div>
            <header>
                <nav className='sticky top-0 z-50 '>
                     <Navbar></Navbar>
                </nav>
                <section>
                    <Banner></Banner>
                    <LatestVisas></LatestVisas>
                </section>
            </header>

            <main>
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;