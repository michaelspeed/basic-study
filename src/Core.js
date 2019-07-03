import React from 'react';
import Loader from "./Components/Loaders/Loader";
import {BrowserRouter, Route} from "react-router-dom";
import Auth from "./Pages/Auth/Auth";

const Suspense = React.Suspense

class Core extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Suspense fallback={<Loader/>}>
                    <BrowserRouter>
                        <Route path={'/'} render={() => (<Auth/>)}/>
                    </BrowserRouter>
                </Suspense>
            </React.Fragment>
        )
    }
}

export default Core
