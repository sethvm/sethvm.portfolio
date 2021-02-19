import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import ScrollToTop from './components/Navigation/ScrollToTop';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// component imports
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import TopShortcut from './components/Navigation/TopShortcut';
import BlueBlock from './components/BlueBlock/BlueBlock';
import Footer from './components/Footer/Footer';

// page body content
import Home from './pages/Home';
/*import Error from './pages/Error';*/
import About from './pages/About';
import Soulfx from './pages/Soulfx';
/*import Albert from './pages/Albert';
import FASSB from './pages/FASSB';
import Visuals from './pages/Visuals';*/

/*template project page*/
/*import NewProject from './pages/NewProject';
import SoulfxOld from './pages/Soulfx_old';*/

export default function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Header />
            <BlueBlock />
            <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact={false} path='/' component={Page} />
            </Switch>
            <SideBar />
            <Footer />
            <TopShortcut />
        </HashRouter>
    );
}

function HomePage() {
    return (
        <>
        <Container>
            <Home />
        </Container>
        </>
    );
}

function Page() {
    return (
        <>
        <Container>
            <Switch>
                <Route exact={true} path='/about' component={About} />
                <Route exact={true} path='/soulfx' component={Soulfx} />
            </Switch>
        </Container>
        </>
    );
}

function Container(props) {
    return (
        <div className='container'>
            {props.children}
        </div>
    );
}
