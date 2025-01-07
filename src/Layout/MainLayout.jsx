import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import LatestVisas from '../Components/LatestVisas';
import HappyClients from '../Components/HappyClients';
import GuidanceSection from '../Components/GuidanceSection';
import VisaProcess from '../Components/VisaProcess';
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
                    <GuidanceSection></GuidanceSection>
                    <VisaProcess></VisaProcess>
                </section>
            </header>

            <main>
                
                <HappyClients></HappyClients>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;