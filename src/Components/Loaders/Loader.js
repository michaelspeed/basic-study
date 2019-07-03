import React from "react";
import {CircularProgress} from "@material-ui/core";

class Loader extends React.Component{
    render() {
        return(
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", alignContent: "center", marginTop: 10, marginBottom: 10}}>
                <CircularProgress/>
            </div>
        )
    }
}

export default Loader
