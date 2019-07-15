import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {appReducer} from "../../store/reducers/appstateReducer";

class NewComponent2 extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div>
                    <span>{this.props.appReducer.value}</span>
                </div>
                <div>
                    {this.props.appReducer.newValue !== null && <span>{this.props.appReducer.newValue}</span>}
                </div>
            </React.Fragment>
        )
    }
}

export default compose(
    connect(state => ({
        appReducer: state.appReducer
    }))
)(NewComponent2)
