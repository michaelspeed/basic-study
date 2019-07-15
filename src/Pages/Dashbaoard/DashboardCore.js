import React from "react";
import DahboardNav from "../../Components/Dashboard/DashboardNav";
import {NewLite1, NewLite2} from "../../Components/Dashboard";

class DashboardCore extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <NewLite1/>
                    <NewLite2/>
                </div>
            </React.Fragment>
        )
    }
}

export default DahboardNav(DashboardCore)
