import React from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import {withRouter} from "react-router-dom";

class Register extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div style={{height: '100%', width: '100%', display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: '10vh'}}>
                    <div style={{display: "flex", flexDirection: "column", width: '100%', padding: 100}}>
                        <Typography variant="h4" gutterBottom>
                            Register
                        </Typography>
                        <TextField
                            required
                            label="Name"
                            margin="normal"
                        />
                        <TextField
                            required
                            label="Email"
                            margin="normal"
                        />
                        <TextField
                            required
                            label="Password"
                            margin="normal"
                            type="password"
                        />
                        <Button variant="outlined" color={"primary"}>
                            Register
                        </Button>
                        <span style={{marginTop: 10}}>Already have an account? <a onClick={() => this.props.history.push('/')} href='javascript:;'>Login</a></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Register)
