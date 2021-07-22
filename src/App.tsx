import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';

import Header from './layoutComponents/Header';

const App = () => {
    return(
        <>
            <Header />
            <main id="wrapper">
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </main>
        </>
    )
}

export default App;
