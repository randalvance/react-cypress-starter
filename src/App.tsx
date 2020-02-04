import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Page1 from './Page1';
import Page2 from './Page2';

const App: React.FC = () => (
    <>
        <h1>React Testing Using Cypress!</h1>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Page1} />
                <Route exact path="/page2" component={Page2} />
            </Switch>
        </BrowserRouter>
    </>
);

export default App;
