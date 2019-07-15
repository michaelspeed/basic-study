import React from "react";
import {bindActionCreators, compose} from "redux";
import ActionCreators from "../../store/actions";
import {connect} from "react-redux";

class NewComp1 extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div style={{marginBottom: 20}}>
                    <button onClick={() => this.props.changeValue("Martina")}>Press</button>
                </div>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default compose(
    connect(null, mapDispatchToProps)
)(NewComp1)
