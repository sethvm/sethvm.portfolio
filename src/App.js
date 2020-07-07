import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import ScrollToTop from './components/TopShortcut/ScrollToTop';
import './components/animate.min.css';
import './components/bootstrap.min.css';

// component imports
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import SideBar from './components/SideBar/SideBar';
import TopShortcut from './components/TopShortcut/TopShortcut';
import PageContent from './pages/PageContainer';
import BlueBlock from './components/BlueBlock/BlueBlock';
import Footer from './components/Footer/Footer';

// page body content
import Home from './pages/Home';
import About from './pages/About';
import Albert from './pages/Albert';
import FASSB from './pages/FASSB';
import Vector from './pages/Vector';

export default function App() {
    return (
        <HashRouter>
        <ScrollToTop />
            <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact={false} path='/' component={Page} />
            </Switch>
        </HashRouter>
    );
}

function HomePage() {
    return (
        <>
        <Header 
        pageType='nav-home animated fadeIn' 
        aboutType='nav-desktop-home link' />
        <Home />
        <Carousel />
        <SideBar />
        <BlueBlock />
        <Footer isHome={true} />
        </>
    );
}

function Page() {
    return (
        <>
        <Header 
        pageType='nav-page' 
        aboutType='nav-desktop-page link' />
        <PageContent>
        <Switch>
            <Route exact={true} path='/about' component={About} />
            <Route exact={true} path='/albert' component={Albert} />
            <Route exact={true} path='/fassb' component={FASSB} />
            <Route exact={true} path='/vector' component={Vector} />
        </Switch>
        </PageContent>
        <TopShortcut />
        <SideBar />
        <Footer isHome={false} />
        </>
    );
}
