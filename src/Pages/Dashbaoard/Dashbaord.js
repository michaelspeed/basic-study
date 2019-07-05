import React from "react";

class Dashbaord extends React.Component {

    state = {
        open: false,
        name: 'react'
    }

    render() {
        const {open, ...rest} = this.state
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}

export default Dashbaord
