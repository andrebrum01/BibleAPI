import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Book from './Pages/Books';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/books/:id" component={Book}/>
            </Switch>
        </BrowserRouter>

    );


}

export default Routes;