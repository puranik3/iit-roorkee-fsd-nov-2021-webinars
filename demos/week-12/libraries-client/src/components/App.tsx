import { Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import NavigationMenu from './NavigationMenu';
import Home from './pages/Home';
import LibrariesList from './pages/LibrariesList';
import LibraryDetails from './pages/LibraryDetails';
import About from './pages/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * <div>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/libraries" exact>
            <LibrariesList />
        </Route>
        <Route path="/libraries/:id">
            <LibraryDetails />
        </Route>
        <Route path="/about">
            <About />
        </Route>
    </div>
 */

function App() {
    return (
        <div>
            <NavigationMenu />
            
            <Container className="my-4">
                <Switch>
                    <Route path="/libraries/:id">
                        <LibraryDetails />
                    </Route>
                    <Route path="/libraries">
                        <LibrariesList />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
