import React from "react";
import {Grid, Hidden} from "@material-ui/core";
import Login from "./Login";
import Register from "./Register";
import mainBack from '../../assets/images/back.jpg'
import {withRouter} from "react-router-dom";
import AuthHoc from "./AuthHoc";

class Auth extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <Grid container={true} style={{height: '100vh'}}>
                    <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                        {this.props.location.pathname === '/' && <Login />}
                        {this.props.location.pathname === '/register' && <Register/>}
                    </Grid>
                    <Grid item={true} xs={0} sm={0} md={6} lg={6} >
                        <Hidden smDown={true}>
                            <img src={mainBack} style={{objectFit: "cover", height: '100vh', width: '100%'}}/>
                        </Hidden>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withRouter(Auth)
