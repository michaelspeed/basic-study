import React from 'react';
import Loader from "./Components/Loaders/Loader";
import {BrowserRouter, Route} from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import DashboardCore from "./Pages/Dashbaoard/DashboardCore";

const Suspense = React.Suspense

class Core extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Suspense fallback={<Loader/>}>
                    <BrowserRouter>
                        <Route path={'/'} render={() => (<Auth/>)} exact={true}/>
                        <Route path={'/dashboard'} render={() => (<DashboardCore/>)}/>
                    </BrowserRouter>
                </Suspense>
            </React.Fragment>
        )
    }
}

export default Core
